import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../shared/model/person';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatButtonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit {

  constructor(private personService:PersonService){}
  displayedColumns: string[] = ['fullName', 'email', 'actions'];
  persons: Person[]=[]

  ngOnInit(): void {
    this.persons=this.personService.list()
  }

  deletePerson(id:number){
    this.personService.delete(id)
    this.persons=this.personService.list()
  }


}
