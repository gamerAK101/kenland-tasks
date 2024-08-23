import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() selectedItem: any;
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(){
      setTimeout(() => {
        this.emitUpdatedData();
      }, 5000);
  }

  emitUpdatedData() {
    alert('')
    this.editEvent.emit('hello');
  }
}
