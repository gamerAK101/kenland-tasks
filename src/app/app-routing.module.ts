import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AddItemsComponent } from './add-items/add-items.component';

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
      },
      {
        path : 'add-items',
        component :  AddItemsComponent
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
