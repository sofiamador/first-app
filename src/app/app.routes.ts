import { Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonComponent } from './components/person/person.component';
import { FormsDemoComponent } from './components/forms-demo/forms-demo.component';



export const routes: Routes = [   

{path: '', component: PersonListComponent},
{path: 'person/:index', component: PersonComponent},
{path: 'forms', component: FormsDemoComponent}
];
