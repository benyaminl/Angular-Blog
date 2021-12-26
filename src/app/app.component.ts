import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-blog';
  logginHidden = 'none';

  public loginComponent = false;

  btnShowLogin() {
    this.logginHidden = (this.logginHidden == 'none') ? 'block' : 'none';
  }
}
