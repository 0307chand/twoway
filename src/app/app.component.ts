import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twoway';
  name!: string;
  em!: string;
  pass!:string;
  show(){
    alert("successfully submitted")
  }
}
