import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BookComponent } from './book/book.component';
const routes: Routes = [
  {path:'detail', component:BookdetailComponent},
  {path:'',redirectTo:'detail',pathMatch: 'full'},
  {path:'book' , component:BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
