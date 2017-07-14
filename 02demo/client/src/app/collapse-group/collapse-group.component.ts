import { Component, OnInit, ContentChildren, AfterContentInit, Input, QueryList, OnDestroy } from '@angular/core';
import { CollapseComponent } from "app/collapse/collapse.component";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'tp-collapse-group',
  templateUrl: './collapse-group.component.html',
  styleUrls: ['./collapse-group.component.scss']
})
export class CollapseGroupComponent implements OnInit, AfterContentInit, OnDestroy {
  
  @ContentChildren(CollapseComponent) collapses: QueryList<CollapseComponent>;
  @Input() multiple: boolean = true;

  private _subcriptions: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.collapses.forEach(collapse => {
      let subcription = collapse.selectedChange.subscribe(coll => {
        if(!this.multiple && coll.selected) {
          this.toggleCollapse(coll);
        }
      });
      this._subcriptions.push(subcription);
    });
  }
  toggleCollapse(collapse): any {
    this.collapses.forEach(c => {
      if(c.collapseId != collapse.collapseId) {
        c.selected = false;
      }
    });
  }
  ngOnDestroy() {
    this._subcriptions.forEach(sub => sub.unsubscribe());
  }
}
