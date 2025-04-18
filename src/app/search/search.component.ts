import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  friendName: string = ''; // Input from the search bar
  friends: string[] = ['ryan', 'kavi', 'jeevasri', 'balaji', 'maya']; // Static usernames
  filteredFriends: string[] = []; // Filtered results

  addFriend(): void {
    // Filter the friends array based on the input
    this.filteredFriends = this.friends.filter(friend =>
      friend.toLowerCase() === this.friendName.toLowerCase()
    );

    // If no match is found, clear the filteredFriends array
    if (this.filteredFriends.length === 0) {
      this.filteredFriends = [];
    }
  }
}