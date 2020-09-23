import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheGithubComponent } from './components/detalhe-github/detalhe-github.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'users/:username', component: DetalheGithubComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

//The two asterisks, **, indicate to Angular that this routes definition is a wildcard route. 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
