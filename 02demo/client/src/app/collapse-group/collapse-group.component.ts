import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { CollapseComponent } from "app/collapse/collapse.component";

@Component({
  selector: 'tp-collapse-group',
  templateUrl: './collapse-group.component.html',
  styleUrls: ['./collapse-group.component.scss']
})
export class CollapseGroupComponent implements OnInit, AfterContentInit {
  @ContentChild(CollapseComponent) collapse: CollapseComponent;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.collapse);
  }
}
