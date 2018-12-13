import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Pg1Component } from './pg1/pg1.component';
import { Pg2Component } from './pg2/pg2.component';
import { Pg3Component } from './pg3/pg3.component';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule,} from '@angular/router';
import { AgmCoreModuleComponent } from './agm-core-module/agm-core-module.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Pg1Component,
    Pg2Component,
    Pg3Component,
    AgmCoreModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
