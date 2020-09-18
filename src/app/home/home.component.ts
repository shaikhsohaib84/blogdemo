import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <img src="/assets/image/home.jpg" class="responsive-img">
  
  `,
  styles: [`
   .responsive-img{
    width:100%;
    height:auto;
   } 
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
