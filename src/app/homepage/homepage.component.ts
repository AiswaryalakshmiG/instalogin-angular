import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
likeCount: number = 0;
like(){
  this.likeCount++;
  
}
  constructor(private router: Router) {}


 
}