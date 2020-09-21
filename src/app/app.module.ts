import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './addpost/addpost.component';

import { EditorModule } from '@tinymce/tinymce-angular';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    LoginComponent,
    HomeComponent,
    AddpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
