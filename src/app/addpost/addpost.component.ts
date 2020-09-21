import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  template: `
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <div class="container">    
    <h1>You share things to <span>help</span> others.</h1>
    <hr>
    <editor
      apikey="d7wjmox9lh5x3yqidefu28kp8pm3bbjztg67glcaqphci9d1"
      initialValue="<p>Initial content of the editor</p>"
      [init]="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print',
          'preview anchor searchreplace visualblocks code',
          'fullscreen insertdatetime media table paste',
          'help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | help'
      }"
    >
    </editor>
  </div>


  `,
  styles: [`
  *{
      font-family: 'Poppins', sans-serif !important;
      
    }
  span{
    color:#FF8C00;
  }
  `]
})
export class AddpostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
