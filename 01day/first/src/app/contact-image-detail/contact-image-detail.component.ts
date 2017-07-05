import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hoang-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.css']
})
export class ContactImageDetailComponent implements OnInit {
  avatar: any = {};
  constructor() { }

  ngOnInit() {
    this.avatar.url = 'http://placehold.it/300/09f.png/fff';
  }

}
