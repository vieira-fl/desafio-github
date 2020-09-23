import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  userUrl:string = 'https://api.github.com/users';
  username;

  constructor(
    private http: HttpClient,
  ) { }
  
  
  getUser(username): Observable<any> {
    return this.http.get(`${this.userUrl}/${username}`)
  }


  getRepos(username):Observable<any> {
    return this.http.get(`${this.userUrl}/${username}/repos`)
  }

}
