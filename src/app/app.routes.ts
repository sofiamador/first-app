import { Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonComponent } from './components/person/person.component';
import { FormsDemoComponent } from './components/forms-demo/forms-demo.component';
import { HomeDemoComponent } from './components/home-demo/home-demo.component';
import { BindingComponent } from './components/binding/binding.component';



export const routes: Routes = [   

{path: '', component: PersonListComponent},
{path: 'person/:idString', component: FormsDemoComponent},
{path: 'newperson', component: FormsDemoComponent},

];
