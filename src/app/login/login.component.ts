import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public txtUser: string = "";
  public txtPass: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  btnLogin(): void {
    alert("Works : " + this.txtUser + " - " + this.txtPass);
  }

}
