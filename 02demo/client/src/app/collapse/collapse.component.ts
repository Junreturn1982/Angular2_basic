import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tp-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  @Input() title:string = '';
  @Input() selected:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggleSelected() {
    this.selected = !this.selected;
  }
}
