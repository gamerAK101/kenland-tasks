import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemsComponent } from './add-items/add-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OverviewComponent } from './overview/overview.component';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    LandingScreenComponent,
    MyItemsComponent,
    AddItemsComponent,
    ParentComponent,
    ChildComponent,
    EditItemComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
