import { BindingFlags } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
    <script src= 
 "//ajax.googleapis.com/ajax/libs/angularjs/1.3.2/angular.min.js"> 
 </script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <body ng-app="app">
      <div class="container">
        <form #signinform="ngForm" (ngSubmit)="processForm()">
          <h1>Save Your account now</h1>
          <h6>get your ultimate latest article.</h6>
          <hr>
          <div class="row">
            
            <div class="col">
              <div class="form-group">
                <label for="Name">First Name</label>
                <input type="text" 
                ngModel pattern="[a-zA-Z ]*"
                name="firstname" 
                class="form-control" 
                id="firstname"
                placeholder="jhon"
                [(ngModel)]="firstname"
                #firstnameinput="ngModel"
                required>
                <div class="alert" role="alert" *ngIf="firstnameinput.invalid && firstnameinput.touched">
                  First name Required!
                </div>   
              </div>

              <div class="form-group">
                <label for="Name">Last Name</label>
                <input type="text" 
                ngModel pattern="[a-zA-Z ]*"
                name="lastname" 
                class="form-control" 
                id="lastname"
                placeholder="jhon"
                [(ngModel)]="lastname"
                #lastnameinput="ngModel"
                required>
                <div class="alert" role="alert" *ngIf="lastnameinput.invalid && lastnameinput.touched">
                  Last name Required!
                </div>   
              </div>
            

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" 
                name="email"
                ngModel pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                class="form-control" 
                placeholder="jhondoe@gmail.com" 
                required email
                [(ngModel)]="email"
                #emailinput="ngModel">
                <div class="alert" role="alert" *ngIf="emailinput.invalid && emailinput.touched">
                  Email Required!
                </div> 
              </div>

              <div ng-controller="geek"> 
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" 
                  ngModel pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
                  class="form-control" 
                  name="password"
                  [(ngModel)]="password"
                  #passwordinput="ngModel"
                  
                  required>
                  <div class="alert" role="alert" *ngIf="passwordinput.invalid && passwordinput.touched">
                    password requires minimum 8 character. one upper-case, lower-case and number!
                  </div> 
                </div>

                <div class="form-group">
                  <label for="confirmpassword">Confirm Password</label>
                  <input type="password"
                  
                  class="form-control" 
                  name="confirmpassword"
                  [(ngModel)]="confirmpassword"
                  #confirmpasswordinput = "ngModel"
                  required> 
              
                  <div class="alert" role="alert" *ngIf="confirmpasswordinput.invalid && confirmpasswordinput.touched">
                    come on, we will not share your password!
                  </div>
                  <div class="alert" role="alert" *ngIf="!passwordmatch()">
                    password mismatch!
                  </div>
                  <div class="alert alertsuccess" role="alert" *ngIf="passwordmatch()">
                    password match!
                  </div>

                </div>
              </div>
              
            </div>
        

          <div class="col is-content">
            <img class="responsive-img" src="assets/image/signup.svg" width="500" height="auto" alt="side image">
          </div>
        </div>
        <hr>
          <button type="submit" class="btn btn-warning" [disabled]="signinform.invalid">Submit</button>
          
        </form>
      </div>
    </body>
  `,
  styles: [`
  *{
    font-family: 'Poppins', sans-serif !important;
    color:#414141;
  }
  .container{
    padding:50px;
  }
  .alert{
    color:red !important;
    padding-left: 0px;
  }
  .alertsuccess{
    color:green !important;
    padding-left: 0px;
  }
  hr{
    border-top: 1px solid #FF8C00!important;
  }
  .col-disabled{
    flex-grow: 0;
  }
  .responsive-img{
      width:100%;
      height:auto;
    }
    @media screen and (max-width:767px){
      .is-content
      {
        display:contents;
      }
    }
  `]
})
export class SigninComponent implements OnInit {
  firstname:string;
  lastname:string;
  email:string;
  password:string;
  confirmpassword:string;
  constructor() { }
  
  ngOnInit(): void {
  }

 

  ValidateEmail(){
    if(this.password==this.confirmpassword){
      alert("Sign up successfull")
    }
    if(this.password!=this.confirmpassword){
      alert("password does not match")
    }
  }

  passwordmatch(){
    if(this.password != this.confirmpassword){
      return false;
    }
    else{
      return true;
    }
  }

  processForm(){
    alert(this.firstname+" "+this.lastname+ " your account has been created successfully.")
  }
}
