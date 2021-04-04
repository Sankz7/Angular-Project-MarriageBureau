import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { componentFactoryName } from '@angular/compiler';

import { AppComponent } from './app.component';

import { SearchComponent } from './search/search.component';
import { InsertComponent } from './insert/insert.component';
import { HomeComponent } from './home/home.component';






//Array of Routes in application
const routes: Routes = [
  {path : 'insert', component:InsertComponent},
  
  {path : 'search' ,component:SearchComponent},

  {path : 'home' ,component:HomeComponent},


  //Add on default path
  { path: '', component:HomeComponent},



  // It is our Widcard component
  //{path : '**', component:InvalidPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }