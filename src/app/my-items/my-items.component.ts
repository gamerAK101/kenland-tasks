import { Component } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent {

  dataPerPage=5;
  currentPage=1;
  totalPages = 0;

  data:any[]=[];

  constructor(private dataSharingService:DataSharingService){
    this.dataSharingService.data$.subscribe((data:any)=>{
      this.data=data;
      this.createPaginator();
    })
  }

  createPaginator(){
    if(this.data.length%this.dataPerPage===0){
      this.totalPages= this.data.length/this.dataPerPage;
    }
    else{
      console.log(this.data.length/this.dataPerPage);
      
      this.totalPages = Number(Math.floor(this.data.length/this.dataPerPage))+1;
    }
    
    alert(this.totalPages.toFixed(0));
  }

  createRange(number: number){
    return new Array(number).fill(0).map((_, i) => i + 1);
  }


}
