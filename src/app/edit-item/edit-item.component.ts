import { Component, Inject } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  
  

  editItemForm: FormGroup;




  constructor(
    public dialogRef: MatDialogRef<EditItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataSharingService : DataSharingService
  ) {

    this.editItemForm = new FormGroup({
      itemName : new FormControl(data.itemName, [Validators.required,Validators.minLength(3)]),
      itemCategory : new FormControl(data.itemCategory, [Validators.required,Validators.minLength(3)]),
      brand : new FormControl(data.brand, [Validators.required,Validators.minLength(3)]),
      price : new FormControl(data.price, Validators.required),
    });
  }

  onSubmit(){
    this.dialogRef.close(this.editItemForm.value);  
  }

  close(){
    this.dialogRef.close()
  }
}
