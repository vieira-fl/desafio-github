import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingSearchComponent } from './components/landing-search/landing-search.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const routes: Routes = [
  { path: '', component: TopBarComponent },
  { path: 'users/:username', component: LandingSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
