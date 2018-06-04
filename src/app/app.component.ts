import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  calc(num1, num2, num3, num4, num5, num6)
{
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);
num6 = parseInt(num6);
 
alert('your change is R' + (2000 - (num1 + num2 + num3 + num4 + num5 + num6)));
  
  }
}
