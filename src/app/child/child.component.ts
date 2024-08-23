import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() selectedItem: any;
  @Output() editEvent: EventEmitter<any> = new EventEmitter<any>();

  isDisabled=true;

  constructor(){
      setTimeout(() => {
        this.emitUpdatedData();
      }, 5000);
  }

  emitUpdatedData() {
    this.editEvent.emit(this.selectedItem);
  }
}
