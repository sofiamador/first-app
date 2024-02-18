import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.log('Binding Component initialized');
  }
 
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
    this.loggingService.log('Click in Binding Component');
  }

}
