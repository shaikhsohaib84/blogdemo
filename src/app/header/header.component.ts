import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <!--navbar-->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <!--logo-->
      <a class="navbar-brand" href="#">
        <img src="assets/image/blog.svg" width="30" height="30" class="d-inline-block align-top" alt="logo">log
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!--signin / login-->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto"> 
          <li class="nav-item"> 
              <a class="nav-link" routerLink="/addpost"> 
                Post +
              </a> 
          </li>
          <li class="nav-item"> 
              <a class="nav-link" routerLink="/login"> 
                SignIn 
              </a> 
          </li> 
          <li class="nav-item"> 
              <a class="nav-link bg" routerLink="/signin"> 
                SignUp 
              </a> 
          </li>  
        </ul> 
      </div>
    </nav>
  `,
  styles: [`
    *{
      font-family: 'Poppins', sans-serif !important;
      color:#f6f6f6 !important;
    }
    .navbar-nav{
      font-size:1.3rem!important;
    }
    .bg{
      color: #ffffff!important;
      background-color: darkorange;
      border-radius: 15px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
