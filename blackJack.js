// blackJack Table

// Beginning of BlackJack Game
// Just do what you can for right now.

const jack = 10;
const queen = 10;
const king = 10;
let ace = "";

let clubs = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king];

let diamonds = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king];

let hearts = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king];

let spades = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king];

const fullDeck = [...clubs, ...diamonds, ...hearts, ...spades];

let count = 0;
let moneyBet = 0;
