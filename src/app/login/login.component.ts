import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  imageUrl = 'https://www.citypng.com/public/uploads/preview/hd-blue-and-white-square-facebook-fb-logo-70175169479235560lh86s7jg.png';
    username = '';
  password = '';


  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = users.find((user: any) => user.username === this.username && user.password === this.password);

    if (matchedUser) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password!');
    }
  }
}