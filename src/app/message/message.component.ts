import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  selectedFriend: string | null = null;

  friends = [
    // { name: 'frd1', image: 'assets/frd1.jpg' },
    // { name: 'frd2', image: 'assets/frd2.png' },
    // { name: 'frd3', image: 'assets/frd3.png' },
    // { name: 'frd4', image: 'assets/frd4.png' }
  ];

  selectFriend(friendName: string): void {
    this.selectedFriend = friendName;
    alert(`You selected ${friendName}. You can now send a message.`);
  }

  sendMessage(): void {
    if (this.selectedFriend) {
      alert(`Message sent to ${this.selectedFriend}!`);
      this.selectedFriend = null; 
    } else {
      alert('Please select a friend to send a message.');
    }
  }
}
