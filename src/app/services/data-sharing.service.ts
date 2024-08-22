import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }
  sample =[
    {
      name : 'sdfsf',
      age:1,
      city:'manh'
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
      age:7,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:8,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:9,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:10,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:11,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:12,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:13,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:14,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:15,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:16,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:17,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:18,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:19,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:20,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:21,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:22,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:23,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:24,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:25,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:26,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:27,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:29,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:29,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:30,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:31,
      city:'manhattandsfsdfsdfds'
    },
    {
      name : 'sdfsfsfsdfsdf',
      age:32,
      city:'manhattandsfsdfsdfds'
    },
  ]
  private allItems = new BehaviorSubject<any>(this.sample);
  data$ = this.allItems.asObservable();

  updateData(data: any) {
    this.allItems.next(data);
  }
}
