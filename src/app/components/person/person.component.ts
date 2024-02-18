import { Component } from '@angular/core';
import { Person } from '../../shared/model/person';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Phone } from '../../shared/model/phone';
import { PhoneType } from '../../shared/model/phone-type';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person1 = new Person("Eran","Zahavi","eran@",37)
  person2 = new Person("Dor","Perez","dor@",19)
  person3 = new Person("Dor","Turgeman","dort@",20)
  person4 = new Person("Eran","Levy","eran@",20)
  personsArray = [this.person1,this.person2,this.person3,this.person4]

  currentPerson:Person = new Person("Dan","Cohen","dan@",22,
  [new Phone("123",PhoneType.Home),new Phone("456",PhoneType.Mobile)])

  @Input()
 set index(index : number) {
   if ((index >= 0 ) && (index < this.personsArray.length)) {
     this.currentPerson = this.personsArray[index];
   }
 }

  isEmailVisible = true

  toggleEmail(){
    if(this.isEmailVisible==true){
      this.isEmailVisible=false
    }else{
      this.isEmailVisible=true
    }
  }

}
