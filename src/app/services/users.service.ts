import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = new BehaviorSubject(null);
  repository:any;
  
  loading: boolean = false;
  errorMessage;
  
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  getUserInfo(username){
    this.errorMessage = "";
    this.apiService.getUser(username)
    .subscribe(
    (userData) => {
      this.apiService.getRepos(username).subscribe((repoData) => {
        this.repository = repoData.sort(function (a, b) {
          return b.stargazers_count - a.stargazers_count;
        });
        this.user.next({... userData, ... { repo: this.repository }})
      });
    },
    (error) => {
      console.error("Requisição falhou")
      this.errorMessage = error;
      this.router.navigateByUrl("404");
    });
    return this.user.asObservable();
  }

}
