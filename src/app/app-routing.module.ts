import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './addpost/addpost.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'addpost',
    component:AddpostComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
