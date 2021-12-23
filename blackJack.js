console.log("A Gambler's Anatomy");

// blackJack Table

// Beginning of BlackJack Game
// Just do what you can for right now.

// number cards equal their number
// Jack, Kings, and Queens all equal 10
// an Ace can equal 1 or 11, it's the player's choice

const startGameBtn = document.getElementById("start-button");

const tableDiv = document.getElementById("table-div");

const moneyInputMsg = document.getElementById("money-input-msg");

const gamePlayDiv = document.getElementById("game-play-div");

const startDiv = document.getElementById("start-div");

const dealerList = document.getElementById("dealer-list");

const playerList = document.getElementById("player-list");

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

let fullDeck = [...hearts, ...spades, ...clubs, ...diamonds];

console.log("--------------------------------------------------");

console.log(fullDeck);

function shuffleDeck(array) {
  let j = 0;
  let temp = 0;
  let i = 0;

  for (; i < array.length; i++) {
    // within the loop we swap the indexes of the current iteration
    // with a random array element
    j = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

console.log("--------------------------------------------------");

let playerCount = 0;
let dealerCount = 0;
let moneyBet = 0;
let winnings = 0;
let count = 0;

console.log("-----------------------------------------");
console.log("-----------------------------------------");

// button if you want to add 11 for Ace
const aceBtnEleven = document.createElement("button");
aceBtnEleven.innerHTML = "Add 11 For Ace";
aceBtnEleven.id = "ace-btn-eleven";

// button if you want to add 1 for Ace
const aceBtnOne = document.createElement("button");
aceBtnOne.innerHTML = "Add 1 For Ace";
aceBtnOne.id = "ace-btn-one";

const startDealBtn = document.createElement("button");
startDealBtn.innerHTML = "Click Here To Start Game";
startDealBtn.id = "start-deal-btn";

startGameBtn.addEventListener("click", function () {
  startDiv.removeChild(startGameBtn);
  tableDiv.innerHTML = "";
  // create elements
  const moneyBetHeader = document.createElement("h2");
  moneyBetHeader.innerHTML = "How Much Do You Want To Bet?";
  moneyBetHeader.id = "money-bet-header";
  //....................................
  const moneyBetInput = document.createElement("input");
  moneyBetInput.placeholder = "Money Bet...";
  moneyBetInput.id = "money-bet-input";
  //.........................................
  const moneyBetInputBtn = document.createElement("button");
  moneyBetInputBtn.innerHTML = "Submit Your Bet";
  moneyBetInputBtn.id = "money-bet-input-btn";
  // append elements
  tableDiv.append(moneyBetHeader);
  tableDiv.append(moneyBetInput);
  tableDiv.append(moneyBetInputBtn);
  //......................................
  moneyBetInputBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (moneyBetInput.value.trim() == "") {
      moneyInputMsg.innerHTML = "Please Enter A Value";
    } else if (isNaN(moneyBetInput.value) == true) {
      moneyInputMsg.innerHTML = "Must Be Numerical Value";
    } else {
      moneyInputMsg.innerHTML = `Money Bet: $${moneyBetInput.value}`;
      moneyBet = parseFloat(moneyBetInput.value);
      console.log(moneyBet);
      moneyBetHeader.innerHTML = "Ready To Start The Game";
      tableDiv.removeChild(moneyBetInput);
      tableDiv.removeChild(moneyBetInputBtn);
      gamePlayDiv.append(startDealBtn);
    }
  });
});

console.log("---------------------------------------------");
console.log("----------------------------------------");

const nextHandBtn = document.createElement("button");
nextHandBtn.innerHTML = "Play Next Hand";
nextHandBtn.id = "next-hand-btn";
const stayHandBtn = document.createElement("button");
//........................................
const endGameBtn = document.createElement("button");
endGameBtn.innerHTML = "End Game";
endGameBtn.id = "end-game-btn";

startDealBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("A Gambler's Anatomy");
  fullDeck = shuffleDeck(fullDeck);
  console.log(fullDeck);
  gamePlayDiv.removeChild(startDealBtn);
  // dealer's hand
  const dealerHeader = document.createElement("h2");
  dealerHeader.id = "dealer-header";
  dealerList.append(dealerHeader);
  const dealerCard = document.createElement("h3");
  dealerCard.id = "dealer-card";
  dealerCard.appendChild(document.createTextNode(fullDeck[count].name));
  dealerList.append(dealerCard);
  dealerCount = dealerCount + fullDeck[count].value;
  dealerHeader.innerHTML = `Dealer Count: ${dealerCount}`;
  count++;
  // player's hand
  const playerHeader = document.createElement("h2");
  playerHeader.id = "player-header";
  playerList.append(playerHeader);
  const playerCard = document.createElement("h3");
  playerCard.id = "player-card";
  playerCard.appendChild(document.createTextNode(fullDeck[count].name));
  playerList.append(playerCard);
  playerCount = playerCount + fullDeck[count].value;
  playerHeader.innerHTML = `Player Count: ${playerCount}`;
  count++;
  // appending next hand button
  gamePlayDiv.append(nextHandBtn);
  // add functionality to nextHandBtn
  nextHandBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // making headers
    const gameResultHeader = document.createElement("h1");
    gameResultHeader.id = "game-result-header";
    gameResultHeader.innerHTML = "";
    gamePlayDiv.append(gameResultHeader);

    // drawing new card for dealer
    const dealerCard2 = document.createElement("h3");
    dealerCard2.id = "dealer-card-2";
    dealerCard2.appendChild(document.createTextNode(fullDeck[count].name));
    dealerCount = dealerCount + fullDeck[count].value;
    dealerHeader.innerHTML = `Dealer Count: ${dealerCount}`;
    dealerList.append(dealerCard2);
    count++;
    // drawing new card for player
    const playerCard2 = document.createElement("h3");
    playerCard2.id = "player-card-2";
    playerCard2.appendChild(document.createTextNode(fullDeck[count].name));
    playerCount = playerCount + fullDeck[count].value;
    playerHeader.innerHTML = `Player Count: ${playerCount}`;
    playerList.append(playerCard2);
    count++;
    if (dealerCount == 21) {
      gameResultHeader.innerHTML = "The House Wins!";
      gamePlayDiv.removeChild(nextHandBtn);
      gamePlayDiv.append(endGameBtn);
      // if player gets 21
    } else if (playerCount == 21) {
      gameResultHeader.innerHTML = "The Guest Wins!";
      gamePlayDiv.removeChild(nextHandBtn);
      gamePlayDiv.append(endGameBtn);
      // if dealer goes over 21
    } else if (dealerCount > 21) {
      gameResultHeader.innerHTML = "The Guest Wins!";
      gamePlayDiv.removeChild(nextHandBtn);
      gamePlayDiv.append(endGameBtn);
      // if player goes over 21
    } else if (playerCount > 21) {
      gameResultHeader.innerHTML = "The House Wins!";
      gamePlayDiv.removeChild(nextHandBtn);
      gamePlayDiv.append(endGameBtn);
    }
  });
});

// adding functionality for end game button
endGameBtn.addEventListener("click", function () {
  count = 0;
  playerCount = 0;
  dealerCount;
  gamePlayDiv.innerHTML = "";
  startDiv.append(startGameBtn);
});
