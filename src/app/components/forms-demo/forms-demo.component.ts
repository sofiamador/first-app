import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,CommonModule],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css'
})
export class FormsDemoComponent {
  firstName = '';
  lastName = '';
  email = '';
  age? : number;

  onSubmitRegistration() {
    console.log("Form submitted!");
    console.log("firstName: " + this.firstName);
    console.log("lastName: " + this.lastName);
    console.log("email: " + this.email);
    console.log("age: " + this.age);
  }
}
