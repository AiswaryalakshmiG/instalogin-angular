import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = users.find((user: any) => user.username === this.username && user.password === this.password);

    if (matchedUser) {
      alert('Login successful!');
      this.router.navigate(['/homepage']);
    } else {
      alert('Invalid username or password!');
    }
  }

  forgot(){
    
  }
}