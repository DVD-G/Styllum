import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Pg1Component} from './pg1/pg1.component';
import {Pg2Component} from './pg2/pg2.component';
import {Pg3Component} from './pg3/pg3.component';

const routes: Routes = [
  {
  path: '', 
  redirectTo: 'Home',
  pathMatch: 'full' 
  },
  {
    path: 'Pg1', 
    component: Pg1Component
  },
  {
    path: 'Pg2', 
    component: Pg2Component
  },
  {
    path: 'Pg3', 
    component: Pg3Component
  },
  {
    path: 'Home', 
    component: HomeComponent
  },
  {
  path: '**',
  redirectTo: 'Home',
  pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash: true})],
  exports: [RouterModule]
 })
export class AppRoutingModule { }
