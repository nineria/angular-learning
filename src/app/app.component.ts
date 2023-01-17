import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-learning';

  text = 'x';

  updateData(item: string) {
    console.log(item);
    this.text = item;
  }
}
