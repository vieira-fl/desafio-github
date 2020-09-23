import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalheGithubComponent } from './components/detalhe-github/detalhe-github.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { BarraDeBuscaComponent } from './components/barra-de-busca/barra-de-busca.component';
import { LinkPaginaInicialComponent } from './components/link-pagina-inicial/link-pagina-inicial.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    DetalheGithubComponent,
    PaginaInicialComponent,
    BarraDeBuscaComponent,
    LinkPaginaInicialComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
