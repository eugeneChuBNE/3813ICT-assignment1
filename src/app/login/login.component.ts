import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void { }

  login(): void {
    if (this.username && this.password) {
      // Authenticate user using some service and set isLoggedIn to true.
      console.log('Logging in with', this.username, this.password);
    }
  }
}