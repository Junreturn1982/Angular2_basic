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
  messages = [];

  onClick() {
    console.log('App component click')
  }
  onChange(event) {
    this.messages.push(event.target.value);
  }
}
