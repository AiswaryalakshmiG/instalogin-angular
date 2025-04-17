import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  mailOrNum = '';
  fullname = '';
  username = '';
  password = '';

  constructor(private router: Router) {}

  onSignup() {
    if (!this.username || !this.password) {
      alert('Please fill in all required fields!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = { mailOrNum:this.mailOrNum,fullname:this.fullname, username: this.username, password: this.password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Please login.');
    this.router.navigate(['/login']);
  }
}
