import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  selectedFriend: string | null = null;
  message: string = '';

  friends = [
    { name: 'frd1', image: 'assets/frd1.jpg' },
    { name: 'frd2', image: 'assets/frd2.png' },
    { name: 'frd3', image: 'assets/frd3.png' },
    { name: 'frd4', image: 'assets/frd4.png' }
  ];

  friendImage: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const friend = this.friends.find(f => f.name === params['friend']);
      this.selectedFriend = friend?.name || null;
      this.friendImage = friend?.image || '';
    });
  }

  sendMessage(): void {
    if (this.selectedFriend && this.message.trim()) {
      alert(`Message sent to ${this.selectedFriend}: ${this.message}`);
      this.message = '';
    } else {
      alert('Please type a message before sending.');
    }
  }
}
