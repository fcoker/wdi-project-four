const mongoose = require('mongoose');
const Product = require('../models/product');

const Products = [
  {
    name: 'Red Dead Redemption II',
    format: 'PS4',
    genre: 'Role-Playing',
    images: '../src/assets/images/redDead',
    video: 'https://www.youtube.com/watch?v=eaW0tYpxyp0',
    price: 50,
    description: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.',
    releaseDate: '26/10/2018',
    reviews: []
  },
  {
    name: 'Forza Motorsport 6',
    format: 'XBOX',
    genre: 'Simulation',
    images: '../src/assets/images/forza6',
    video: 'https://www.youtube.com/watch?v=4vLQpUgm0aU',
    price: 45,
    description: 'Breathtaking graphics at 1080p resolution and 60 frames per second. Witness the spectacle of night racing under the stadium lights of Daytona and the intense claustrophobia of racing by headlight in the utter blackness of Le Mans’ back stretch. Experience the immersion of racing in the rain as working wipers barely clear the spray and tires hydroplane across physically based 3D puddles.',
    releaseDate: '15/09/2015',
    reviews: []
  },
  {
    name: 'FALLOUT 76',
    format: 'XBOX',
    genre: 'Simulation',
    images: '../src/assets/images/fallout',
    video: 'https://www.youtube.com/watch?v=M9FGaan35s0',
    price: 45,
    description: 'From the award-winning creators of Skyrim and Fallout 4, Bethesda Game Studios presents Fallout 76. It’s 25 years after the nuclear-war caused devastation in the States and Vault 76 is finally ready to open. You were selected along with a few others to rebuild society and its now Reclamation Day.Emerge into the post-nuclear war lands of West Virginia as you go alone or team up to explore the most dynamic Fallout world yet. You must rebuild walls, buildings, and the hopes of civilians as you survive in this dynamic open-world.',
    releaseDate: '14/11/2018',
    reviews: []
  },
  {
    name: '12 Years a Slave',
    format: 'Movie',
    genre: 'Adventure',
    images: '../src/assets/images/12Years',
    video: 'https://www.youtube.com/watch?v=z02Ie8wKKRg',
    price: 20,
    description: 'Based on an incredible true story of one man\'s fight for survival and freedom. In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty personified by a malevolent slave owner, as well as unexpected kindnesses, Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon\'s chance meeting with a Canadian abolitionist will forever alter his life.',
    releaseDate: '10/01/2014',
    reviews: []
  },
  {
    name: 'Django',
    format: 'Movie',
    genre: 'Action',
    images: '../src/assets/images/django',
    video: 'https://www.youtube.com/watch?v=mUtUKeJSWbI',
    price: 35,
    description: 'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South\'s most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django\'s long-lost wife (Kerry Washington) is still a slave.',
    releaseDate: '18/01/2013',
    reviews: []
  }
];
