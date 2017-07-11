import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwitchesComponent } from "app/container/switches/switches.component";
import { CardComponent } from 'app/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
