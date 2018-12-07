const mongoose = require('mongoose');
const Product = require('../models/product');
const User = require('../models/user');
const Purchase = require('../models/purchase');
const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const userIds = [
  '5be9b02777e350fe07977fb0',
  '5be9b02777e350fe07977fb1',
  '5be9b02777e350fe07977fb2'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Sham',
    email: 'sh@m',
    profilePic: '/assets/images/sham.png',
    password: 'pass',
    accountType: 'admin'
  }, {
    _id: userIds[1],
    username: 'Rafa',
    email: 'r@fa',
    profilePic: '/assets/images/raph.png',
    password: 'pass',
    accountType: 'customer'
  }, {
    _id: userIds[2],
    username: 'Femi',
    email: 'f@mi',
    profilePic: '/assets/images/femi.png',
    password: 'pass',
    accountType: 'customer'
  }
];

const productData = [
  {
    name: 'Red Dead Redemption II',
    format: 'PS4',
    genre: 'Role-Playing',
    images: '/assets/images/redDead.png',
    video: 'https://www.youtube.com/embed/F63h3v9QV7w',
    unitPrice: 50,
    description: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.',
    releaseDate: '26/10/2018',
    reviews: []
  },
  {
    name: 'Forza Motorsport 6',
    format: 'XBOX',
    genre: 'Simulation',
    images: '/assets/images/forza6.png',
    video: 'https://www.youtube.com/embed/4vLQpUgm0aU',
    unitPrice: 45,
    description: 'Breathtaking graphics at 1080p resolution and 60 frames per second. Witness the spectacle of night racing under the stadium lights of Daytona and the intense claustrophobia of racing by headlight in the utter blackness of Le Mans’ back stretch. Experience the immersion of racing in the rain as working wipers barely clear the spray and tires hydroplane across physically based 3D puddles.',
    releaseDate: '15/09/2015',
    reviews: []
  },
  {
    name: 'FALLOUT 76',
    format: 'XBOX',
    genre: 'Simulation',
    images: '/assets/images/fallout.png',
    video: 'https://www.youtube.com/embed/M9FGaan35s0',
    unitPrice: 45,
    description: 'From the award-winning creators of Skyrim and Fallout 4, Bethesda Game Studios presents Fallout 76. It’s 25 years after the nuclear-war caused devastation in the States and Vault 76 is finally ready to open. You were selected along with a few others to rebuild society and its now Reclamation Day.Emerge into the post-nuclear war lands of West Virginia as you go alone or team up to explore the most dynamic Fallout world yet. You must rebuild walls, buildings, and the hopes of civilians as you survive in this dynamic open-world.',
    releaseDate: '14/11/2018',
    reviews: []
  },
  {
    name: '12 Years a Slave',
    format: 'Movie',
    genre: 'Adventure',
    images: '/assets/images/12Years.png',
    video: 'https://www.youtube.com/embed/z02Ie8wKKRg',
    unitPrice: 20,
    description: 'Based on an incredible true story of one man\'s fight for survival and freedom. In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty personified by a malevolent slave owner, as well as unexpected kindnesses, Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon\'s chance meeting with a Canadian abolitionist will forever alter his life.',
    releaseDate: '10/01/2014',
    reviews: []
  },
  {
    name: 'Django',
    format: 'Movie',
    genre: 'Action',
    images: '/assets/images/django.png',
    video: 'https://www.youtube.com/embed/mUtUKeJSWbI',
    unitPrice: 35,
    description: 'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South\'s most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django\'s long-lost wife (Kerry Washington) is still a slave.',
    releaseDate: '18/01/2013',
    reviews: []
  }
];

Product.collection.drop();
User.collection.drop();
Purchase.collection.drop();

Product.create(productData)
  .then(products => {
    console.log(`Created ${products.length} products`);
    User.create(userData)
      .then(users => {
        console.log(`Created ${users.length} users`);
        mongoose.connection.close();
      });
  });
