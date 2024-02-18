import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  productName = "apple";
  price = 50;
  quantity = 80;
  isDisabled = false

  getTodayDateAsString(): string {
    const today = new Date();
    return today.toLocaleDateString();
  }

  handleButtonClick() {
    console.log('Button clicked!');
  }

}
