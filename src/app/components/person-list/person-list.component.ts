import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../shared/model/person';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {
  person1 = new Person("Eran","Zahavi","eran@",37)
  person2 = new Person("Dor","Perez","dor@",19)
  person3 = new Person("Dor","Turgeman","dort@",20)
  person4 = new Person("Eran","Levy","eran@",20)
  personsArray = [this.person1,this.person2,this.person3,this.person4]

  displayedColumns: string[] = ['fullName', 'email', 'actions'];

}
