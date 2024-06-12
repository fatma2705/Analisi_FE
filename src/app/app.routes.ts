import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './auth/admin/admin.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"", redirectTo:"/home", pathMatch: "full"
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },

    {
        path: 'admin', component: AdminComponent, canActivate: [authGuard]
    }
];
