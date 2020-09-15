import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  
  <div class="container">
  
  {{password}}
    <form #loginform="ngForm">
      <h3>Log In</h3>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" 
        name="email" 
        class="form-control" 
        id="email" 
        placeholder="jhondoe@gmail.com"   
        [(ngModel)]="email"
        #emailinput="ngModel"
        required email>
        <div class="alert alert-danger" role="alert" *ngIf="emailinput.invalid && emailinput.touched">
          Email Required!
        </div>
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" 
        class="form-control" 
        name="password"
        id="password" 
        [(ngModel)]="password"
        #passwordinput="ngModel"
        required >
        <div class="alert alert-danger" role="alert" *ngIf="passwordinput.invalid && passwordinput.touched">
          Password Required!
        </div>
      </div>

      <button type="submit" class="btn btn-warning" [disabled]="loginform.invalid">Submit</button>

    </form>
  </div>
  `,
  styles: [`
    .container{
      padding:50px;
    }
  `]
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor() { }

  ngOnInit(): void {
  }

}
