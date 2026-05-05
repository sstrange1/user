import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  view: string = 'register';

  registerData = {
    name: '',
    email: '',
    password: ''
  };

  loginData = {
    email: '',
    password: ''
  };

  user: any = null;

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register(this.registerData);
    alert('Registered Successfully');
    this.view = 'login';
  }

  login() {
    const success = this.auth.login(
      this.loginData.email,
      this.loginData.password
    );

    if (success) {
      this.user = this.auth.getUser();
      this.view = 'profile';
    } else {
      alert('Invalid Credentials');
    }
  }

  logout() {
    this.view = 'login';
  }
}