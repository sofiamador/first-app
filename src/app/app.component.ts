import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BindingComponent } from "./components/binding/binding.component";
import { PersonComponent } from "./components/person/person.component";
import { Person } from './shared/model/person';
import { NgifDemoComponent } from "./components/ngif-demo/ngif-demo.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from '@angular/common';
import { Phone } from './shared/model/phone';
import { PhoneType } from './shared/model/phone-type';
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, BindingComponent, PersonComponent, NgifDemoComponent, ListComponent, CommonModule, ButtonsComponent, PersonListComponent, PipesComponent,RouterModule]
})
export class AppComponent {


}
