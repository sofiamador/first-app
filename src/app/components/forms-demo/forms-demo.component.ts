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
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';


@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.css'
})
export class FormsDemoComponent implements OnInit{
  constructor(private personService: PersonService, private router: Router) {}



  @ViewChild('phonesGroup') phonesGroup? : NgModelGroup;
  @Input() idString?:string;
  currentPerson: Person = new Person(0,'','','')

  ngOnInit(): void {
    if (this.idString) {
      let id:number = parseInt(this.idString);
      const person = this.personService.get(id);     
      if (person) {
        this.currentPerson = person;
      }
    }}

  
 onSubmitRegistration() {
   console.log("Form submitted!");
   if (this.idString){
     this.personService.update(this.currentPerson)}
   else{
     this.personService.add(this.currentPerson)}
	this.router.navigate(['/']);
  }


  addPhoneNumber() {
    this.currentPerson.phones.push(new Phone("", PhoneType.Mobile));
    }

  removePhoneNumber(index : number) {
      this.currentPerson.phones.splice(index, 1);
      this.phonesGroup?.control.markAsDirty();

    }
    

}
