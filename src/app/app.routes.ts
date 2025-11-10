import { Routes } from '@angular/router';
import { HomeComponent } from '../homepage/home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { DoctordashboardComponent } from '../doctordashboard/doctordashboard.component';
import { PatientdashboardComponent } from '../patientdashboard/patientdashboard.component';
import { ClientloginComponent } from '../clientlogin/clientlogin.component';
import { DoctorloginComponent } from '../doctorlogin/doctorlogin.component';
import { ForgotpwdComponent } from '../forgotpwd/forgotpwd.component';
import { authGuard } from '../auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'clientlogin', component: ClientloginComponent },
    { path: 'doctorlogin', component: DoctorloginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'doctor', component: DoctordashboardComponent, canActivate:[authGuard] },
    { path: 'client', component: PatientdashboardComponent, canActivate:[authGuard] },
    { path: 'forgotpwd', component: ForgotpwdComponent }
];
