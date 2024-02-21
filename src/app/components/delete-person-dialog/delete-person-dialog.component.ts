import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef,MatDialogTitle,
 MatDialogContent,MatDialogActions,MatDialogClose} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-delete-person-dialog',
  standalone: true,
  imports: [MatButtonModule,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose],
  templateUrl: './delete-person-dialog.component.html',
  styleUrl: './delete-person-dialog.component.css'
})
export class DeletePersonDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public name: string,) {}
 

}
