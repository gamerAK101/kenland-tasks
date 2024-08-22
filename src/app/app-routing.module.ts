import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { MyItemsComponent } from './my-items/my-items.component';

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
        path : 'my-items',
        component :  MyItemsComponent
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
