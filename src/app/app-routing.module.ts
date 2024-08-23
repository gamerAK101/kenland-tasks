import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { ParentComponent } from './parent/parent.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path:'',
    component : LandingScreenComponent,
    children:[
      {
        path:'',
        component : OverviewComponent
      },
      {
        path : 'my-items',
        component :  MyItemsComponent
      },
      {
        path : 'add-items',
        component :  AddItemsComponent
      },
      {
        path : 'parent-child-demo',
        component:ParentComponent
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
