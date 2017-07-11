import { Component, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('switches') switches: SwitchesComponent;
  
  sayHello() {
    console.log(this.name.nativeElement.value);
    this.switches.toggle();
  }  

  onSubmit(formValue: any) {
    console.log(formValue);
  }
}
