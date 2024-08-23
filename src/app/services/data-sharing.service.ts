import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  sample =[
    {
      itemName : 'sdfsf',
      price:1,
      itemCategory:'manh'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:2,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:3,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:4,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:5,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:6,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:7,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:8,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:9,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:10,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:11,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:12,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:13,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:14,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:15,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:16,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:17,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:18,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:19,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:20,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:21,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:22,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:23,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:24,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:25,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:26,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:27,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:29,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:29,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:30,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:31,
      itemCategory:'manhattandsfsdfsdfds'
    },
    {
      itemName : 'sdfsfsfsdfsdf',
      price:32,
      itemCategory:'manhattandsfsdfsdfds'
    },
  ]
  private allItems = new BehaviorSubject<any>(this.sample);
  data$ = this.allItems.asObservable();

  updateData(data: any) {
    const currentArray = this.allItems.getValue();
    currentArray.push(data);
    this.allItems.next(currentArray);
  }
}
