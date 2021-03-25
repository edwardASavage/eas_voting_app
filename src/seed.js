import Daniel from '../public/images/avatars/daniel.jpg';
import Kristy from '../public/images/avatars/kristy.png';
import Veronika from '../public/images/avatars/veronika.jpg';
import Molly from '../public/images/avatars/molly.png';

import Aqua from '../public/images/products/image-aqua.png'
import Steel from '../public/images/products/image-steel.png'
import Yellow from '../public/images/products/image-yellow.png'
import Rose from '../public/images/products/image-rose.png'

const products = [
      {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: 21,
        submitterAvatarUrl: Daniel,
        productImageUrl: Aqua,
      },
      {
        id: 2,
        title: 'Supermajority: The Fantasy Congress League',
        description: 'Earn points when your favorite politicians pass legislation.',
        url: '#',
        votes: 32,
        submitterAvatarUrl: Kristy,
        productImageUrl: Rose,
      },
      {
        id: 3,
        title: 'Tinfoild: Tailored tinfoil hats',
        description: 'We already have your measurements and shipping address.',
        url: '#',
        votes: 14,
        submitterAvatarUrl: Veronika,
        productImageUrl: Steel,
      },
      {
        id: 4,
        title: 'Haught or Naught',
        description: 'High-minded or absent-minded? You decide.',
        url: '#',
        votes: 12,
        submitterAvatarUrl: Molly,
        productImageUrl: Yellow,
      },
    ];
  
export default products;
  