import { Routes } from '@angular/router';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { SigninComponent } from './pages/signin/signin.component';

export const routes: Routes = [
    {
        path:"",
        component:NotesListComponent,
    },
    {
        path:"signin",
        component:SigninComponent
    }
];
