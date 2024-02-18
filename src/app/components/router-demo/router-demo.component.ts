import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router-demo',
  standalone: true,
  imports: [],
  templateUrl: './router-demo.component.html',
  styleUrl: './router-demo.component.css'
})
export class RouterDemoComponent {
  fruits = ["Apple", "Banana","Pear","Cherry"];
  currentFruit = "None";

  @Input()
  set id(id : number) {
    if ((id >= 0 ) && (id < this.fruits.length)) {
      this.currentFruit = this.fruits[id];
    }
  }
}


