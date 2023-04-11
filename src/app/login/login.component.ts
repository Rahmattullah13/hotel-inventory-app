import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login() {
    if (this.email === 'admin@gmail.com' && this.password === '123') {
      alert('Login Successful!');
    }
  }
}
