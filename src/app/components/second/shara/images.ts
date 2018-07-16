import {Injectable} from '@angular/core';

import {EventEmitter} from '@angular/core';
@Injectable()



export class ImageService {




  visible_images = [];

  getimages (  )
  {
    /*
       if(types  === 'vibes'){return this.visible_images = images.slice(0, 4);}
      if(types  === 'mood'){return this.visible_images = images.slice(4, 8);}
    */

    return this.visible_images = images.slice(0);
  }
}
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
