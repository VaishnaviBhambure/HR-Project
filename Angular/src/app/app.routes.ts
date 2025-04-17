import { Routes } from '@angular/router';
import { DashboardComponent } from './features/Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './features/login/login.component';
import { OtpComponent } from './features/otp/otp.component';


export const routes: Routes = [
    {path: 'dashboard',component: DashboardComponent},
    { path:'',component:LoginComponent},
    {path:'otp',component:OtpComponent}
];
