import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  friends: string []= [];
  friendName='';

  addFriend()
{
  if(this.friendName){
    this.friends.push(this.friendName);
    this.friendName='';
    console.log(this.friends);
  }
}
  constructor() { }

}
