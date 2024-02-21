import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../shared/model/person';
import { RouterLink } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeletePersonDialogComponent } from '../delete-person-dialog/delete-person-dialog.component';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatButtonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit{


 constructor(private personService: PersonService,private dialog: MatDialog) {}

  displayedColumns: string[] = ['fullName', 'email', 'actions'];
  persons: Person[]=[]

  ngOnInit(): void {
    this.persons=this.personService.list()
  }
  deletePerson(id:number,fullName:string){
    const dialogRef = this.dialog.open(DeletePersonDialogComponent,{data: fullName,});
    
  dialogRef.afterClosed().subscribe(deletionConfirmed => {
        if(deletionConfirmed==true){
          this.personService.delete(id)
          this.persons=this.personService.list()
          }
      });
  }
 
 
 
  

}
