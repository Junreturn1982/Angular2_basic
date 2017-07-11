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
export class AppComponent implements AfterViewInit {
  title = 'app first: Hello Hoang';
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('switches') switches: SwitchesComponent;
  
  sayHello() {
    console.log(this.name.nativeElement.value);
    this.switches.toggle();
  }  

  ngAfterViewInit() {
    this.name.nativeElement.focus();
  }
  // onSubmit(formValue: any) {
  //   console.log(formValue);
  // }
}
