import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Fideicomiso por los niños';
  today = new Date();
  date = new Date();
  formattedDate = this.date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
 obj = {
    img: [
      {
        xd:'hola'
      }
    ]
 }

}
