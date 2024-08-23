import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  selectedItem:any={};
  selectedIndex=0;
  items=[
    {
      itemName : 'Rock',
      price:10,
      itemCategory:'Stationary',
      description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, id. Labore vel, deserunt dolores iure voluptatem reiciendis sequi. Sunt tempore consequuntur dicta veniam. Nulla, ullam quam quos magnam laboriosam minus.',
      isSelect:false
    },
    {
      itemName : 'Paper',
      price:10,
      itemCategory:'Stationary',
      description : 'lorem ipsum',
      isSelect:false

    },
    {
      itemName : 'Scissor',
      price:10,
      itemCategory:'Stationary',
      description : 'lorem ipsum',
      isSelect:false
    },
  ];

  constructor(){
    this.selectItem(this.items[0],0);
  }

  selectItem(x:any,index:any){
    this.selectedItem = x;
    this.selectedIndex = index;
    for (const [i,x] of this.items.entries()) {
      this.items[i].isSelect=i===index;
    }
  }


  receiveChildData(receivedData: any) {
    
  this.items[this.selectedIndex]=receivedData;
  }
}
