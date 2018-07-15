import { Component, OnInit } from '@angular/core';
import {NgZone} from '@angular/core';
import * as $ from 'jquery';
import index from '@angular/cli/lib/cli';



const images = [
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

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  mobWidth: number;
     date = new Date();
      
images = images;
  constructor(ngZone: NgZone) {
    window.onresize = (e) => {
      ngZone.run(() => {
        this.mobWidth = window.innerWidth;
      });
    };
  }

public  ngOnInit() {
  $(document).ready(function() {
    $('.img-fluid').click(function() {
      const img = $(this);
      const src = img.attr('src');
      $('body').append('<div class=\'popup\'>' +
        '<div class=\'popup_bg\'><div style=\"\" class =\'close\'>close</div></div>' +
        '<img src=\'' + src + '\' class=\'popup_img\' />'  +
        '</div>');
      $('.popup').fadeIn(800);
      $('.close').click(function() {
        $('.popup').fadeOut(800);
        setTimeout(function() {
          $('.popup').remove();
        }, 800);
      });
    }

    );
      /*function showModule() {
        $('#module').show('slow');
      }
      $(function() {
        $('#close').click(function() {
          $('#module').hide(200);
        });

      });*/
  }

  );
  }
delete(image: any) {
    let index = this.images.indexOf(image);

if (index > -1) {
  this.images.splice(index, 1);
}
}
}
