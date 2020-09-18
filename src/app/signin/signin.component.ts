import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

    <div class="container">
      <form #signinform="ngForm">
        <h1>Save Your account now</h1>
        <h6>get your ultimate latest article on all stuff.</h6>
        <hr>
        <div class="row">
          
          <div class="col">
            <div class="form-group">
              <label for="Name">First Name</label>
              <input type="text" 
              name="firstname" 
              class="form-control" 
              id="firstname"
              placeholder="jhon"
              [(ngModel)]="firstname"
              #firstnameinput="ngModel"
              required>
              <div class="alert alert-danger" role="alert" *ngIf="firstnameinput.invalid && firstnameinput.touched">
                First name Required!
              </div>   
            </div>

            <div class="form-group">
              <label for="Name">Last Name</label>
              <input type="text" 
              name="lastname"
              [(ngModel)]="lastname"
              class="form-control" 
              placeholder="doe"
              [(ngModel)]="lastname"
              #lastnameinput = "ngModel"> 
              <div class="alert alert-danger" role="alert" *ngIf="lastnameinput.invalid && lastnameinput.touched">
                Last name Required!
              </div>
            </div>
          

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" 
              name="email"
              class="form-control" 
              placeholder="jhondoe@gmail.com" 
              required email
              [(ngModel)]="email"
              #emailinput="ngModel">
              <div class="alert alert-danger" role="alert" *ngIf="emailinput.invalid && emailinput.touched">
                Email Required!
              </div> 
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" 
              class="form-control" 
              name="password"
              [(ngModel)]="password"
              #passwordinput="ngModel"
              required>
              <div class="alert alert-danger" role="alert" *ngIf="passwordinput.invalid && passwordinput.touched">
                we will not share your password!
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
              <div class="alert alert-danger" role="alert" *ngIf="confirmpasswordinput.invalid && confirmpasswordinput.touched">
                come on, we will not share your password!
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
  `,
  styles: [`
  *{
    font-family: 'Poppins', sans-serif !important;
    color:#414141;
  }
  .container{
    padding:50px;
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
    @media screen and (max-width:427px){
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

}
