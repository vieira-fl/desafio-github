import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-detalhe-github',
  templateUrl: './detalhe-github.component.html',
  styleUrls: ['./detalhe-github.component.sass']
})
export class DetalheGithubComponent implements OnInit {
  title = 'desafio-github';
  
  user;
  username:string;
  
  constructor(
    private route: ActivatedRoute,
    private users: UsersService,
  ) { }

  ngOnInit(): void {
    
    this.username = this.route.snapshot.paramMap.get('username')
  
    this.users.getUserInfo(this.username).subscribe(data =>{
      this.user = data;
    });
  }

  
}
