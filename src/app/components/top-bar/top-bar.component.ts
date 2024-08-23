import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  
  createRange(number: number){
    return new Array(number).fill(0).map((_, i) => i + 1);
  }
}
