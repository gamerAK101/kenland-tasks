import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../services/data-sharing.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css'],
})
export class AddItemsComponent {
  addItemForm = new FormGroup({
    itemName : new FormControl('', [Validators.required,Validators.minLength(3)]),
    itemCategory : new FormControl('', [Validators.required,Validators.minLength(3)]),
    brand : new FormControl('', [Validators.required,Validators.minLength(3)]),
    price : new FormControl('', Validators.required),
  });

  constructor(private dataSharingService : DataSharingService,private snackBar: MatSnackBar){
    
  }

  onSubmit(){
    console.log(this.addItemForm.value);
    
    this.dataSharingService.addData(this.addItemForm.value);
    this.addItemForm.reset();
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('Item Added. Check My Items Page', 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Position: 'start', 'center', 'end', 'left', 'right'
      verticalPosition: 'bottom', // Position: 'top', 'bottom'
    });
  }
}
