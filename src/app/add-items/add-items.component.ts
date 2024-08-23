import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from '../services/data-sharing.service';

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

  constructor(private dataSharingService : DataSharingService){
    
  }

  onSubmit(){
    console.log(this.addItemForm.value);
    
    this.dataSharingService.updateData(this.addItemForm.value);
  }
}
