import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AviasalesAppComponent } from './aviasales-app/aviasales-app.component';
import { TransfersComponent } from './filter/transfers/transfers.component';
import { CompaniesComponent } from './filter/companies/companies.component';
import { TicketsTabsComponent } from './tickets-tabs/tickets-tabs.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatNativeDateModule} from "@angular/material/core";
import {MaterialExampleModule} from "../environments/material.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    AviasalesAppComponent,
    TransfersComponent,
    CompaniesComponent,
    TicketsTabsComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
