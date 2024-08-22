import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path:'',
    component : LandingScreenComponent,
    children:[
      {
        path:'',
        component : DashboardComponent
      },
      {
        path : 'appointment',
        component :  AppointmentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
