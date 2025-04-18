import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
likeCount = 0;
like() {
  this.likeCount++;
}

ngOnInit() {
  console.log('Homepage loaded');
}
  constructor(private router: Router) {}


 
}