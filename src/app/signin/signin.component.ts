import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  template: `

    <div class="container">
      <form #signinform="ngForm">
        <h3>Sign Up</h3>
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
          <div class="alert alert-danger" role="alert" *ngIf="lastnameinput.dirty && lastnameinput.touched">
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

        <button type="submit" class="btn btn-warning" [disabled]="signinform.invalid">Submit</button>
        
      </form>
    </div>
  `,
  styles: [`
  .container{
    padding:50px;
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
