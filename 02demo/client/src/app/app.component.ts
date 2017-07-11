import { Component } from '@angular/core';

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
  
  sayHello(name: string) {
    console.log(name);
  }  

  onSubmit(formValue: any) {
    console.log(formValue);
  }
}
