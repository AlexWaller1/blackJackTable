console.log("A Gambler's Anatomy");

// blackJack Table

// Beginning of BlackJack Game
// Just do what you can for right now.

// number cards equal their number
// Jack, Kings, and Queens all equal 10
// an Ace can equal 1 or 11, it's the player's choice

const startGameBtn = document.getElementById("start-button");

const hearts = [
  {
    name: "2 of Hearts",
    value: 2,
    image: ""
  },
  {
    name: "3 of Hearts",
    value: 3,
    image: ""
  },
  {
    name: "4 of Hearts",
    value: 4,
    image: ""
  },
  {
    name: "5 of Hearts",
    value: 5,
    image: ""
  },
  {
    name: "6 of Hearts",
    value: 6,
    image: ""
  },
  {
    name: "7 of Hearts",
    value: 7,
    image: ""
  },
  {
    name: "8 of Hearts",
    value: 8,
    image: ""
  },
  {
    name: "9 of Hearts",
    value: 9,
    image: ""
  },
  {
    name: "10 of Hearts",
    value: 10,
    image: ""
  },
  {
    name: "Jack of Hearts",
    value: 10,
    image: ""
  },
  {
    name: "Queen of Hearts",
    value: 10,
    image: ""
  },
  {
    name: "King of Hearts",
    value: 10,
    image: ""
  },
  {
    name: "Ace of Hearts",
    value: "",
    image: ""
  }
];

const spades = [
  {
    name: "2 of Spades",
    value: 2,
    image: ""
  },
  {
    name: "3 of Spades",
    value: 3,
    image: ""
  },
  {
    name: "4 of Spades",
    value: 4,
    image: ""
  },
  {
    name: "5 of Spades",
    value: 5,
    image: ""
  },
  {
    name: "6 of Spades",
    value: 6,
    image: ""
  },
  {
    name: "7 of Spades",
    value: 7,
    image: ""
  },
  {
    name: "8 of Spades",
    value: 8,
    image: ""
  },
  {
    name: "9 of Spades",
    value: 9,
    image: ""
  },
  {
    name: "10 of Spades",
    value: 10,
    image: ""
  },
  {
    name: "Jack of Spades",
    value: 10,
    image: ""
  },
  {
    name: "Queen of Spades",
    value: 10,
    image: ""
  },
  {
    name: "King of Spades",
    value: 10,
    image: ""
  },
  {
    name: "Ace of Spades",
    value: "",
    image: ""
  }
];

const clubs = [
  {
    name: "2 of Clubs",
    value: 2,
    image: ""
  },
  {
    name: "3 of Clubs",
    value: 3,
    image: ""
  },
  {
    name: "4 of Clubs",
    value: 4,
    image: ""
  },
  {
    name: "5 of Clubs",
    value: 5,
    image: ""
  },
  {
    name: "6 of Clubs",
    value: 6,
    image: ""
  },
  {
    name: "7 of Clubs",
    value: 7,
    image: ""
  },
  {
    name: "8 of Clubs",
    value: 8,
    image: ""
  },
  {
    name: "9 of Clubs",
    value: 9,
    image: ""
  },
  {
    name: "10 of Clubs",
    value: 10,
    image: ""
  },
  {
    name: "Jack of Clubs",
    value: 10,
    image: ""
  },
  {
    name: "Queen of Clubs",
    value: 10,
    image: ""
  },
  {
    name: "King of Clubs",
    value: 10,
    image: ""
  },
  {
    name: "Ace of Clubs",
    value: "",
    image: ""
  }
];

const diamonds = [
  {
    name: "2 of Diamonds",
    value: 2,
    image: ""
  },
  {
    name: "3 of Diamonds",
    value: 3,
    image: ""
  },
  {
    name: "4 of Diamonds",
    value: 4,
    image: ""
  },
  {
    name: "5 of Diamonds",
    value: 5,
    image: ""
  },
  {
    name: "6 of Diamonds",
    value: 6,
    image: ""
  },
  {
    name: "7 of Diamonds",
    value: 7,
    image: ""
  },
  {
    name: "8 of Diamonds",
    value: 8,
    image: ""
  },
  {
    name: "9 of Diamonds",
    value: 9,
    image: ""
  },
  {
    name: "10 of Diamonds",
    value: 10,
    image: ""
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    image: ""
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    image: ""
  },
  {
    name: "King of Diamonds",
    value: 10,
    image: ""
  },
  {
    name: "Ace of Diamonds",
    value: "",
    image: ""
  }
];

const fullDeck = [...hearts, ...spades, ...clubs, ...hearts];

let count = 0;
let moneyBet = 0;
