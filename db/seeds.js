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
//GENRE KEY!!
//GAME: RPG--racing--shooter
//MOVIE: drama--adventure--

const productData = [
  {
    name: 'Red Dead Redemption II',
    format: 'PS4',
    genre: 'RPG',
    images: ['/assets/images/redDead.png'],
    video: 'https://www.youtube.com/embed/F63h3v9QV7w?controls=1',
    unitPrice: 49.99,
    description: 'America, 1899. The end of the wild west era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed. From the creators of Grand Theft Auto V and Red Dead Redemption, Red Dead Redemption 2 is an epic tale of life in America at the dawn of the modern age.',
    releaseDate: '26/10/2018',
    reviews: []
  },
  {
    name: 'Forza Motorsport 6',
    format: 'XBOX',
    genre: 'racing',
    images: ['https://cdn.game.net/image/upload/c_fill,dpr_2.0,f_auto,h_437,q_auto/v1/game_img/ml2/3/4/4/9/344998_xb1_a.png'],
    video: 'https://www.youtube.com/embed/4vLQpUgm0aU',
    unitPrice: 44.99,
    description: 'Breathtaking graphics at 1080p resolution and 60 frames per second. Witness the spectacle of night racing under the stadium lights of Daytona and the intense claustrophobia of racing by headlight in the utter blackness of Le Mans’ back stretch. Experience the immersion of racing in the rain as working wipers barely clear the spray and tires hydroplane across physically based 3D puddles.',
    releaseDate: '15/09/2015',
    reviews: []
  },
  {
    name: 'Fallout 76',
    format: 'XBOX',
    genre: 'RPG',
    images: ['https://cdn.game.net/image/upload/c_fill,dpr_2.0,f_auto,h_437,q_auto/v1/game_img/ml2/7/2/8/3/728308_xb1_a.png'],
    video: 'https://www.youtube.com/embed/M9FGaan35s0',
    unitPrice: 44.99,
    description: 'From the award-winning creators of Skyrim and Fallout 4, Bethesda Game Studios presents Fallout 76. It’s 25 years after the nuclear-war caused devastation in the States and Vault 76 is finally ready to open. You were selected along with a few others to rebuild society and its now Reclamation Day.Emerge into the post-nuclear war lands of West Virginia as you go alone or team up to explore the most dynamic Fallout world yet. You must rebuild walls, buildings, and the hopes of civilians as you survive in this dynamic open-world.',
    releaseDate: '14/11/2018',
    reviews: []
  },
  {
    name: '12 Years a Slave',
    format: 'Movie',
    genre: 'drama',
    images: ['https://images.store.hmv.com/app_/responsive/HMVStore/media/product/788036/01-788036.jpg?w=950'],
    video: 'https://www.youtube.com/embed/z02Ie8wKKRg',
    unitPrice: 19.99,
    description: 'Based on an incredible true story of one man\'s fight for survival and freedom. In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty personified by a malevolent slave owner, as well as unexpected kindnesses, Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon\'s chance meeting with a Canadian abolitionist will forever alter his life.',
    releaseDate: '10/01/2014',
    reviews: []
  },
  {
    name: 'Django',
    format: 'Movie',
    genre: 'action',
    images: ['https://images.store.hmv.com/app_/responsive/HMVStore/media/product/703704/02-703704.jpg?w=950'],
    video: 'https://www.youtube.com/embed/mUtUKeJSWbI',
    unitPrice: 9.99,
    description: 'Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South\'s most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django\'s long-lost wife (Kerry Washington) is still a slave.',
    releaseDate: '18/01/2013',
    reviews: []
  },
  {
    name: 'Kingdom Hearts III',
    format: 'XBOX',
    genre: 'RPG',
    images: ['/assets/images/kingdomHearts3.png'],
    video: 'https://www.youtube.com/embed/JQUAeOvSlJ4',
    unitPrice: 39.99,
    description: 'Square Enix have not failed to surprise with Kingdom Hearts 3. Sora returns for a long-awaited adventure is some familiar worlds teaming up with some much-loved Disney characters. Fans have been waiting for this Disney RPG game for years and it’s available to pre-order! Immerse yourself in multiple creative worlds from iconic Disney movies where you must protect them from the Heartless invasion! Team up with Sora, Donald, and Goofy as you play in the many worlds including:',
    releaseDate: '25/01/2019',
    reviews: []
  },
  {
    name: 'The Witcher 3',
    format: 'XBOX',
    genre: 'RPG',
    images: ['/assets/images/theWitcher3.png'],
    video: 'https://www.youtube.com/embed/tDfa1Qp2SwA',
    unitPrice: 39.99,
    description: 'The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia, tasked with finding a child of prophecy in a vast open world rich with merchant cities, viking pirate islands, dangerous mountain passes, and forgotten caverns to explore.',
    releaseDate: '16/11/2018',
    reviews: []
  },
  {
    name: 'Kingdom Come Deliverance',
    format: 'XBOX',
    genre: 'RPG',
    images: ['/assets/images/kingdomCome.png'],
    video: 'https://www.youtube.com/embed/F1z6ubHowgA',
    unitPrice: 36.99,
    description: 'A first-person, realistic RPG that will take you to medieval Europe. The year is 1403, the region Bohemia, located in the heart of Europe, rich in culture, silver and sprawling castles. The game is based on a true story – a story of kings, heirs, a kingdom, castle sieges and bloody battles.',
    releaseDate: '13/02/2018',
    reviews: []
  },
  {
    name: 'Mount & Blade, War Band',
    format: 'XBOX',
    genre: 'RPG',
    images: ['/assets/images/mountBlade.png'],
    video: 'https://www.youtube.com/embed/VEyuUC2fYgI',
    unitPrice: 34.99,
    description: 'Charge into battle. Ride into Legend. In a land torn asunder by incessant warfare, it is time to assemble your own band of hardened warriors and enter the fray. Lead your men into battle, expand your realm, and claim the ultimate prize: the throne of Calradia!',
    releaseDate: '16/09/2016',
    reviews: []
  },
  {
    name: 'F1 2018',
    format: 'PS4',
    genre: 'racing',
    images: ['/assets/images/f12018.png'],
    video: 'https://www.youtube.com/embed/iyz9xU-h9Ms',
    unitPrice: 49.99,
    description: 'The official video game of the 2018 FORMULA ONE WORLD CHAMPIONSHIP returns. Be immersed in the world of Formula 1 on your PS4 and enjoy many legendary elements from the popular 2018 season. Including talented drivers, 21 iconic circuits and all the official teams that you may have seen in F1 2018, you can build your reputation on the tracks in this authentic game.',
    releaseDate: '24/08/2018',
    reviews: []
  },
  {
    name: 'Wreck Fest',
    format: 'PS4',
    genre: 'racing',
    images: ['/assets/images/wreckfest.png'],
    video: 'https://www.youtube.com/embed/cbsDiIuI7KQ',
    unitPrice: 55.99,
    description: 'Break the rules and take full-contact racing to the limit with Wreckfest! Expect epic crashes, neck-to-neck fights over the finish line and brand-new ways for metal to bend – These are the once-in-a-lifetime moments that can only be achieved in Wreckfest, with its true-to-life physics simulation crafted by legendary developer Bugbear, who also brought you FlatOut 1 & 2! Burn rubber and shred metal in the ultimate driving playground!',
    releaseDate: '31/12/2019',
    reviews: []
  },
  {
    name: 'Dirt 4',
    format: 'PS4',
    genre: 'racing',
    images: ['/assets/images/dirt4.png'],
    video: 'https://www.youtube.com/embed/xtgwsuiax4c',
    unitPrice: 54.99,
    description: 'Globally renowned for delivering premium quality, authentic and fun racing games, Codemasters is once more bringing its talent and experience to the world of off-road driving. With DiRT 4, the team have sought to combine the levels of thrill and realism from last year’s DiRT Rally with the fearless excitement, accessibility and adrenalin-fuelled contests previously seen in its critically acclaimed prequels DiRT 2 and DiRT 3.',
    releaseDate: '09/06/2017',
    reviews: []
  },
  {
    name: 'Gravel',
    format: 'PS4',
    genre: 'racing',
    images: ['/assets/images/gravel.png'],
    video: 'https://www.youtube.com/embed/-xEGWBaadzo',
    unitPrice: 19.99,
    description: 'GRAVEL IS THE COMPLETE OFF ROAD EXPERIENCE! Gravel is the only title in the market that includes the most extreme mix of off-road competitions ever seen in a game! There is always competition, variety and entertainment the driver can experience through several diﬀerent game modes for a never-ending fun! Thanks to Epic Games\' Unreal Engine 4, Gravel offers an incredible visual quality, with realistic and impressive lighting and particle effects!',
    releaseDate: '27/02/2018',
    reviews: []
  },
  {
    name: 'Grip',
    format: 'PS4',
    genre: 'racing',
    images: ['/assets/images/grip.png'],
    video: 'https://www.youtube.com/embed/YCump8QXWo0',
    unitPrice: 39.99,
    description: 'GRIP is a high octane, hardcore combat racer, packing ferocious speed and armed to the teeth with heavy weapons. Evolved from the age of street racing, the world of GRIP is brutal and cut-throat to the core. To win the race is never enough, greatness comes from the journey and the trail of merciless destruction you unleash upon your rivals along the way. Scale walls, ceilings and anything else you can get your tyres on to... as you master tantalising tracks, tricks and perform mind-blowing stunts to race your way across the cosmos. Customise your vehicle, utilise devastating weapons and exploit a destructible environment to ensure not only victory, but the complete annihilation of your opponents.Harnessing gravity defying physics alongside a bristling arsenal of outlandish weapons, GRIP delivers the fastest, most competitive racing experience ever. Featuring a killer soundtrack, furious speeds and intense action, GRIP is guaranteed to generate unforgettable gaming moments online or offline with nail-biting split screen racing and tournaments.',
    releaseDate: '27/02/2019',
    reviews: []
  },
  {
    name: 'Lord of The Rings The Two Towers',
    format: 'Movie',
    genre: 'adventure',
    images: ['https://store.hmv.com/app_/responsive/HMVStore/media/product/93869/02-93869.jpg?w=950'],
    video: 'https://www.youtube.com/embed/LbfMDwc4azU',
    unitPrice: 8.99,
    description: 'The sequel to the Golden Globe-nominated and AFI Award-winning "The Lord of the Rings: The Fellowship of the Ring," "The Two Towers" follows the continuing quest of Frodo (Elijah Wood) and the Fellowship to destroy the One Ring. Frodo and Sam (Sean Astin) discover they are being followed by the mysterious Gollum. Aragorn (Viggo Mortensen), the Elf archer Legolas and Gimli the Dwarf encounter the besieged Rohan kingdom, whose once great King Theoden has fallen under Saruman\'s deadly spell.',
    releaseDate: '11/12/2002',
    reviews: []
  },
  {
    name: 'Pan\'s Labyrinth',
    format: 'Movie',
    genre: 'adventure',
    images: ['https://images-na.ssl-images-amazon.com/images/I/91YKKpsxXkL._SY679_.jpg'],
    video: 'https://www.youtube.com/embed/4Evmr2ZCjWc',
    unitPrice: 6.99,
    description: 'It\'s 1944 and the Allies have invaded Nazi-held Europe. In Spain, a troop of soldiers are sent to a remote forest to flush out the rebels. They are led by Capitan Vidal, a murdering sadist, and with him are his new wife Carmen and her daughter from a previous marriage, 11-year-old Ofelia. Ofelia witnesses her stepfather\'s sadistic brutality and is drawn into Pan\'s Labyrinth, a magical world of mythical beings.',
    releaseDate: '24/11/2006',
    reviews: []
  },
  {
    name: 'Spirited Away',
    format: 'Movie',
    genre: 'adventure',
    images: ['https://images-na.ssl-images-amazon.com/images/I/818jzf1RzYL._SY679_.jpg'],
    video: 'https://www.youtube.com/embed/ByXuk9QqQkk',
    unitPrice: 9.99,
    description: 'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.',
    releaseDate: '12/09/2003',
    reviews: []
  },
  {
    name: 'Avatar',
    format: 'Movie',
    genre: 'adventure',
    images: ['https://images-na.ssl-images-amazon.com/images/I/81pzuyxTApL._SX522_.jpg'],
    video: 'https://www.youtube.com/embed/d1_JBMrrYw8',
    unitPrice: 7.99,
    description: 'On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na\'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.',
    releaseDate: '17/12/2009',
    reviews: []
  },
  {
    name: 'The Never Ending Story',
    format: 'Movie',
    genre: 'adventure',
    images: ['https://images-na.ssl-images-amazon.com/images/I/8186mfynmgL._SL1500_.jpg'],
    video: 'https://www.youtube.com/embed/UeFni9dOv7c',
    unitPrice: 6.99,
    description: 'On his way to school, Bastian (Barret Oliver) ducks into a bookstore to avoid bullies. Sneaking away with a book called "The Neverending Story," Bastian begins reading it in the school attic. The novel is about Fantasia, a fantasy land threatened by "The Nothing," a darkness that destroys everything it touches. The kingdom needs the help of a human child to survive. When Bastian reads a description of himself in the book, he begins to wonder if Fantasia is real and needs him to survive.',
    releaseDate: '4/04/1985',
    reviews: []
  },
  {
    name: 'Amistad',
    format: 'Movie',
    genre: 'drama',
    images: ['https://images-na.ssl-images-amazon.com/images/I/71kqX4hRuRL._SY679_.jpg'],
    video: 'https://www.youtube.com/embed/BJFDOvGMD0U',
    unitPrice: 8.99,
    description: 'In 1839, the slave ship Amistad set sail from Cuba to America. During the long trip, Cinque (Djimon Hounsou) leads the slaves in an unprecedented uprising. They are then held prisoner in Connecticut, and their release becomes the subject of heated debate. Freed slave Theodore Joadson (Morgan Freeman) wants Cinque and the others exonerated and recruits property lawyer Roger Baldwin (Matthew McConaughey) to help his case. Eventually, John Quincy Adams (Anthony Hopkins) also becomes an ally.',
    releaseDate: '10/12/1997 ',
    reviews: []
  },
  {
    name: 'Hotel Rwanda',
    format: 'Movie',
    genre: 'drama',
    images: ['https://images-na.ssl-images-amazon.com/images/I/81GADUkM8hL._SL1500_.jpg'],
    video: 'https://www.youtube.com/embed/qZzfxL90100',
    unitPrice: 9.99,
    description: 'Paul Rusesabagina (Don Cheadle), a Hutu, manages the Hôtel des Mille Collines and lives a happy life with his Tutsi wife (Sophie Okonedo) and their three children. But when Hutu military forces initiate a campaign of ethnic cleansing against the Tutsi minority, Paul is compelled to allow refugees to take shelter in his hotel. As the U.N. pulls out, Paul must struggle alone to protect the Tutsi refugees in the face of the escalating violence later known as the Rwandan genocide.',
    releaseDate: '4/03/2005',
    reviews: []
  },
  {
    name: 'Gifted Hands: The Ben Carson Story',
    format: 'Movie',
    genre: 'drama',
    images: ['https://i.ebayimg.com/images/g/HP8AAOSwEcxb4cKi/s-l640.jpg'],
    video: 'https://www.youtube.com/embed/Lco7mPJT9X0',
    unitPrice: 6.99,
    description: 'Young Ben Carson didn\'t have much of a chance. Growing up in a broken home amongst poverty and prejudice, his grades suffered and his temper flared, and yet, his mother never lost her faith in him. Insisting he follow the opportunities she never had, she helped to grow his imagination, intelligence and, most importantly, his belief in himself. That faith would be his gift.',
    releaseDate: '7/02/2009',
    reviews: []
  },
  {
    name: 'Call Of Duty: Black Ops 4',
    format: 'PS4',
    genre: 'shooter',
    images: ['/assets/images/blackOps.png'],
    video: 'https://www.youtube.com/embed/CoLKsV0eMro',
    unitPrice: 44.99,
    description: 'Featuring gritty, grounded Multiplayer combat, the biggest Zombies offering ever with three full undead adventures at launch, and Blackout, where the universe of Black Ops comes to life in a massive battle royale experience. Blackout features the largest map in Call of Duty history, signature Black Ops combat, and characters, locations and weapons from the Black Ops series. ',
    releaseDate: '11/10/2018',
    reviews: []
  },
  {
    name: 'Overwatch',
    format: 'PS4',
    genre: 'shooter',
    images: ['https://cdn.game.net/image/upload/c_fill,dpr_2.0,f_auto,h_437,q_auto/v1/game_img/ml2/7/3/3/0/733075_ps4_a.png'],
    video: 'https://www.youtube.com/embed/FqnKB22pOC0',
    unitPrice: 44.99,
    description: 'The world needs heroes. Join over 30 million players* as you clash on the battlefields of tomorrow. Choose your hero from a diverse cast of soldiers, scientists, adventurers, and oddities. Bend time, defy physics, and unleash an array of extraordinary powers and weapons. Engage your enemies in iconic locations from around the globe in the ultimate team-based shooter. Take your place in Overwatch. Based on internal company records and reports from key distribution partners.',
    releaseDate: '28/07/2017',
    reviews: []
  },
  {
    name: 'Battlefield V',
    format: 'PS4',
    genre: 'shooter',
    images: ['/assets/images/battlefield.png'],
    video: 'https://www.youtube.com/embed/-FEgeuGsmzQ',
    unitPrice: 49.99,
    description: 'Enter mankind’s greatest conflict with Battlefield™ V as the series goes back to its roots in a never-before-seen portrayal of World War 2. Take on all-out multiplayer across the world or witness human drama set against global combat in single player War Stories. Firestorm is Battle Royale, reimagined for Battlefield™ V. Prepare for an all-out war of survival, where players fight to become the last squad standing – all set against the backdrop of mankind\'s greatest conflict. As part of the Tides of War post-launch journey all players will go on, Firestorm is an all-new, different way to fight, with the epic scale of weapons, vehicles, team play, and destruction Battlefield is renowned for. Royale will never be the same.',
    releaseDate: '20/11/2018',
    reviews: []
  },
  {
    name: 'Rage 2',
    format: 'PS4',
    genre: 'shooter',
    images: ['/assets/images/rage2.png'],
    video: 'https://www.youtube.com/embed/szDECq67c30',
    unitPrice: 55.99,
    description: 'An asteroid has annihilated 80% of the earth’s population, and humanity’s numbers are dwindling. Ruthless and bloodthirsty gangs roam the open roads and the tyrannical Authority seek to rule with an iron fist. As Walker, the last Ranger of the wasteland and a threat to their power, you have been robbed of your home and left for dead. Now you’ll have to rage for justice and freedom. With ludicrous vehicle combat, super-powered first-person mayhem, and an open world full of emergent madness, you will tear across an unforgiving wasteland battling sadistic gangs to find the tools and tech needed to crush the oppressive rule of The Authority once and for all.',
    releaseDate: '14/05/2019',
    reviews: []
  },
  {
    name: 'Titan Fall 2',
    format: 'PS4',
    genre: 'shooter',
    images: ['/assets/images/titanfall2.png'],
    video: 'https://www.youtube.com/embed/VqeMjHmL9eg',
    unitPrice: 55.99,
    description: 'Respawn Entertainment returns with the highly anticipated sequel Titanfall 2. Featuring a captivating single player campaign along with an expanded multiplayer mode, Titanfall 2 delivers a fast-paced thrilling experience for action fans.',
    releaseDate: '28/10/2016',
    reviews: []
  },
  {
    name: 'Skyscraper',
    format: 'Movie',
    genre: 'Action',
    images: ['/assets/images/skyscraper1.png', '/assets/images/skyscraper2.jpg', '/assets/images/skyscraper3.jpg'],
    video: 'https://www.youtube.com/embed/t9QePUT-Yt8',
    unitPrice: 14.99,
    description: 'Global icon Dwayne Johnson leads the cast of Legendary`s Skyscraper as former FBI Hostage Rescue Team leader and U.S. war veteran Will Sawyer, who now assesses security for skyscrapers. On assignment in China he finds the tallest, safest building in the world suddenly ablaze, and he`s been framed for it. A wanted man on the run, Will must find those responsible, clear his name and somehow rescue his family who is trapped inside the building...above the fire line.',
    releaseDate: '19/11/2018',
    reviews: []
  },
  {
    name: 'Atomic Blonde',
    format: 'Movie',
    genre: 'Action',
    images: ['/assets/images/atomicblonde1.png', '/assets/images/atomicblonde2.jpeg', '/assets/images/atomicblonde3.jpg', '/assets/images/atomicblonde1.jpg'],
    video: 'https://www.youtube.com/embed/yIUube1pSC0',
    unitPrice: 14.99,
    description: 'An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.',
    releaseDate: '09/08/2017',
    reviews: []
  },
  {
    name: 'Batman v Superman: Dawn of Justice',
    format: 'Movie',
    genre: 'Action',
    images: ['/assets/images/batmanvsuperman1.jpg', '/assets/images/batmanvsuperman1.jpeg', '/assets/images/batmanvsuperman2.jpg'],
    video: 'https://www.youtube.com/embed/0WWzgGyAH6Y',
    unitPrice: 12.99,
    description: 'Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.',
    releaseDate: '25/03/2016',
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
