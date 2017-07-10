import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from "./container/contact-list/contact-list.component";
import { ContactDetailComponent } from "app/container/contact-detail/contact-detail.component";
import { SwitchesComponent } from "app/container/switches/switches.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    SwitchesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
