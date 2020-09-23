import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
  styleUrls: ['./barra-de-busca.component.sass']
})
export class BarraDeBuscaComponent implements OnInit {
  
  @Input() username;
  searchText = new FormControl('');
  
  constructor(
    private router: Router,
    private users: UsersService,
  ) { }

  ngOnInit(): void {
    if(this.username){
      this.searchText.setValue(this.username);
    }
  }
   
  onSubmit() {
    this.router.navigateByUrl(`/users/${this.searchText.value}`);
    this.users.getUserInfo(this.searchText.value);
  }

}
