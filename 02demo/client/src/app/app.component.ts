import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SwitchesComponent } from "app/container/switches/switches.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h1>
  //     Welcome to {{title}}!!
  //   </h1>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app first: Hello Hoang';
  
}
