import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { SwitchesComponent } from "app/container/switches/switches.component";
import { POSTS } from "app/services/post";

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
export class AppComponent implements OnInit {
  posts: any[] = [];
  
  ngOnInit() {
    setTimeout(() => {
      this.posts = POSTS.slice();
    }, 500);
  }
}
