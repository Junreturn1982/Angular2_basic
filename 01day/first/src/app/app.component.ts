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
  messages: string[] = [];
  message: string = '';

  onClick() {
    this.messages.push(this.message);
    this.message = ''; 
  }
 
  
}
