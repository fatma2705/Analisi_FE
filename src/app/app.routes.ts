import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {  LogoutComponent } from './auth/logout/logout.component';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { AnalysisListComponent } from './analysis/analysis-list/analysis-list.component';
import { AnalysisHomeComponent } from './analysis/analysis-home/analysis-home.component';
import { AnalysisDetailComponent } from './analysis/analysis-detail/analysis-detail.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

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
        path: 'admin', component: AdminDashboardComponent
    },

    {
        path: 'logout', component: LogoutComponent, canActivate: [authGuard]
    },
    {
        path: 'analysis/list', component: AnalysisListComponent, canActivate: [authGuard] 
    },
    {
        path: 'analysis/home', component: AnalysisHomeComponent, canActivate: [authGuard] 
    },
    {
        path: 'analysis/:id/:action' , component:AnalysisDetailComponent
    }


];
