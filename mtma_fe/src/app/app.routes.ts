import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Listtasks } from './listtasks/listtasks';
import { Createtasks } from './createtasks/createtasks';
import { Edittasks } from './edittasks/edittasks';

export const routes: Routes = [
    {
        path:'',
        component: Login
    },
    {
        path: 'signup',
        component: Signup
    },
    {
        path: 'tasks',
        component: Listtasks
    },
    {
        path: 'tasks/new',
        component: Createtasks
    },
    {
        path: 'tasks/edit/:taskId',
        component: Edittasks
    }
];
