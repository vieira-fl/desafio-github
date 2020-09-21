import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repos } from '../models/reposModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  userUrl:string = 'https://api.github.com/users';
  
  username:string;

  constructor(
    private http: HttpClient,
  ) { }
  
  getUser(username){
    return this.http.get(`${this.userUrl}/${username}`);
  }

  getRepos(username):Observable<Repos[]> {
    return this.http.get<Repos[]>(`${this.userUrl}/${username}/repos`)
  }


}
