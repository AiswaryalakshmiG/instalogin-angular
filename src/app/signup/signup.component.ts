import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  mail = '';
  fullname = '';
  username = '';
  password = '';

  

  onSignup() {
    if (!this.username || !this.password) {
      alert('Please fill in all required fields!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const newUser = { username: this.username, password: this.password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Please login.');
   
  }
}
