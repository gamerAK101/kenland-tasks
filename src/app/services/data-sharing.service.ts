import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  sample =[
    {
      itemName : 'Aventador',
      itemCategory:'Car',
      brand:'Lambo',
      price:100,
     
    },
    {
      itemName : 'Snickers',
      itemCategory:'Chocolate',
      brand:'Snickers',
      price:100,
     
    },
  ]
  private allItems = new BehaviorSubject<any>(this.sample);
  data$ = this.allItems.asObservable();

  addData(data: any) {
    const currentArray = this.allItems.getValue();
    currentArray.push(data);
    this.allItems.next(currentArray);
  }

  updateData(data:any,i:number){
    const currentArray = this.allItems.getValue();
    currentArray[i]=data;
    this.allItems.next(currentArray);
  }
}
