import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(username: string, password: string): boolean {
    
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}


