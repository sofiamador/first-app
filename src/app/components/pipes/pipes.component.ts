import { Component } from '@angular/core';
import { DatePipe,CurrencyPipe,UpperCasePipe,DecimalPipe,PercentPipe } from '@angular/common';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe,CurrencyPipe,UpperCasePipe,DecimalPipe,PercentPipe ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  currentDate = new Date();
  price = 15.99;
  pi = 3.1415927;
  completion = 0.85;
  message = 'Hello World';
}
