import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})



export class SecondComponent implements OnInit {
     date = new Date();
    images = [
    {'id': 1, 'category': 'mood', 'url': 'assets/1.jpg ' },
    {'id': 2, 'category': 'mood', 'url': 'assets/2.jpg ' },
    {'id': 3, 'category': 'mood', 'url': 'assets/3.jpg ' },
    {'id': 4, 'category': 'mood', 'url': 'assets/4.jpg ' },

    {'id': 5, 'category': 'vibes', 'url': 'assets/5.jpg' },
    {'id': 6, 'category': 'vibes', 'url': 'assets/6.jpg' },
    {'id': 7, 'category': 'vibes', 'url': 'assets/7.jpg' },
    {'id': 8, 'category': 'vibes', 'url': 'assets/8.jpg' },

      {'id': 9, 'category': 'vibes', 'url': 'assets/9.jpg' },
      {'id': 10, 'category': 'vibes', 'url': 'assets/10.jpg' },
      {'id': 11, 'category': 'vibes', 'url': 'assets/11.jpg' },
      {'id': 12, 'category': 'vibes', 'url': 'assets/12.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
