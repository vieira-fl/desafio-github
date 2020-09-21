import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';
import { Repos } from '../../models/reposModels';

@Component({
  selector: 'app-landing-search',
  templateUrl: './landing-search.component.html',
  styleUrls: ['./landing-search.component.sass']
})
export class LandingSearchComponent implements OnInit {
  
  title = 'desafio-github';

  user:object;
  repository:Repos[];
  username:string;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    
    this.username = this.route.snapshot.paramMap.get('username')

    // ao iniciar o componente, utiliza getUser definido no api.service e utiliza o método subscribe para linkar o objeto obtido através da API ao parâmetro data e associa o objeto ao parâmetro user da classe LandingSearchComponent.
    // desta forma, temos o parâmetro user da classe LandingSearchComponent igual ao objeto obtido pela API definida no arq api.service.
    // o objeto é um elemento JSON.
    this.apiService.getUser(this.username).subscribe((data) => {
      this.user = data;
    });
    this.apiService.getRepos(this.username).subscribe((data) => {
      this.repository = data;
      console.log(data);
    });

  }

}
