import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.sass']
})
export class TopBarComponent implements OnInit {
  // Enviando o valor do usuário para o componente landing-search. 
  // @Output() searchUser: EventEmitter<string> = new EventEmitter<string>();
  searchText: string;

  constructor(
    private router: Router
  ) { }

   // método executado ao submetermos o form.
   // define que a constante username é igual ao texto digitado no input type="text" do form, conforme vínculado pelo [(ngModel)]
   onSubmit() {
    const username = this.searchText
    // this.searchUser.emit(username);
    this.router.navigateByUrl('/users/'+username)
   }

  ngOnInit(): void {
  }

}
