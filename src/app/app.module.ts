import { Component, NgModule,Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalComponent, NgbdModalContent } from './modal/modal.component';
import { RouterModule, Routes } from '@angular/router';

export let browserRefresh = false;
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    FirstChildComponent,
    SecondChildComponent,
    NgbdModalComponent, 
    NgbdModalContent
  ],
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    JsonpModule
  ],
  entryComponents: [NgbdModalContent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
