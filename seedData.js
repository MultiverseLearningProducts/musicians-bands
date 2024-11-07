
const seedBand = [
  {
    name: 'The Rolling Stones',
    genre: 'Rock',
    showCount: 150,
  },
  {
    name: 'Adele',
    genre: 'Pop',
    showCount: 80,
  },
  {
    name: 'BTS',
    genre: 'K-Pop',
    showCount: 120,
  },
];

const seedMusician = [
  {
    name: 'John Lennon',
    instrument: 'Guitar',
  },
  {
    name: 'Elvis Presley',
    instrument: 'Vocals',
  },
  {
    name: 'Lady Gaga',
    instrument: 'Vocals',
  },
];

const seedSong = [
  {
    title: 'Hey Jude',
    year: 1968,
    length: 431, // 7 minutes 11 seconds
  },
  {
    title: 'Someone Like You',
    year: 2011,
    length: 285, // 4 minutes 45 seconds
  },
  {
    title: 'Dynamite',
    year: 2020,
    length: 219, // 3 minutes 39 seconds
  },
];

module.exports = {
  seedBand,
  seedMusician,
  seedSong,
};

