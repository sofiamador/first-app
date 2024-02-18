import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgModelGroup} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Person } from '../../shared/model/person';
import { MatIconModule } from '@angular/material/icon';
import { PhoneType } from '../../shared/model/phone-type';
import { Phone } from '../../shared/model/phone';


@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css'
})
export class FormsDemoComponent implements OnInit{

  @ViewChild('phonesGroup') phonesGroup? : NgModelGroup;
  

  persons:Person[] = []


  @Input()
  id?:number

  currentPerson! : Person;

  ngOnInit(): void {
    if (this.id && (this.id < this.persons.length) && (this.id >= 0)) {
      this.currentPerson = this.persons[this.id];
    } else {
      this.currentPerson = new Person(0,'','','')
    }
  }
  

  onSubmitRegistration() {
    console.log("Form submitted!");
    console.log(this.currentPerson);
  }

  addPhoneNumber() {
    this.currentPerson.phones.push(new Phone("", PhoneType.Mobile));
    }

  removePhoneNumber(index : number) {
      this.currentPerson.phones.splice(index, 1);
      this.phonesGroup?.control.markAsDirty();

    }
    

}
