import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'hoang-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {
  @Input() checked: Boolean = false;
  @Output('checkedChange') change: EventEmitter<boolean> 
                            = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  emitChangeValue(event): void {
    // event.stopPropagation();
    this.change.emit(event.target.checked);
  }
}