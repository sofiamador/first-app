import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  fruits:string[] =   ['Apple','Banana', 'Cherry','Pear'];

  removeItem(index: number) {
    this.fruits.splice(index, 1);
  }
 
  
}
