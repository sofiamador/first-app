import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-ngif-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif-demo.component.html',
  styleUrl: './ngif-demo.component.css'
})
export class NgifDemoComponent {
  count:number = 0;
  
  increment(): void {
    this.count++;
  }
}
