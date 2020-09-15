import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!--navbar-->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <!--logo-->
      <a class="navbar-brand" href="#">
        <img class="logo-size" src="assets/image/blog.svg"  alt="logo" >
      </a>
      <!--signin / login-->
      <ul class="navbar-nav ml-auto"> 
        <li class="nav-item"> 
            <a class="nav-link" routerLink="/login"> 
              LogIn 
            </a> 
        </li> 
        <li class="nav-item"> 
            <a class="nav-link bg" routerLink="/signin"> 
              Sign Up 
            </a> 
        </li>  
      </ul> 
    </nav>
  `,
  styles: [`
    .logo-size{
      width: 10% !important;
      height: auto;
    }
    .navbar-nav{
      font-size:1.3rem!important;
    }
    .bg{
      color: #ffffff!important;
      background-color: darkorange;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
