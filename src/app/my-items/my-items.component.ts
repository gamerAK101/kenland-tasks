import { Component } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { EditItemComponent } from '../components/edit-item/edit-item.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private dataSharingService:DataSharingService,public dialog: MatDialog){
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
  }

  createRange(number: number){
    return new Array(number).fill(0).map((_, i) => i + 1);
  }

  selectPage(pageNo:any){
    this.currentPage = pageNo;
    // alert(this.currentPage)
    console.log(this.data);
    
  }

  openEditItem(item:any,i:any){
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '400px', // Adjust the width as needed
  
      data: item
    });
  
    dialogRef.afterClosed().subscribe((result:any) => {
      
      if(result){
        this.dataSharingService.updateData(result,i);
      }
    });
  }

  


}
