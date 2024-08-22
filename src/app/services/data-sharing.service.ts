import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  sample =[
    {
      name : 'sdfsfsfsdfsdf',
      age:1,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:2,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:3,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:4,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:5,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:6,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:5,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:6,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:5,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:6,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:6,
      city:'manhattandsfsdfsdfds'
    },
  ]
  private allItems = new BehaviorSubject<any>(this.sample);
  data$ = this.allItems.asObservable();

  updateData(data: any) {
    this.allItems.next(data);
  }
}
