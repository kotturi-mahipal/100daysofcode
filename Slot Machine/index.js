/* 
TODO:
    1. Deposit some money
    2. Determine the # of lines to bet on
    3. Collect the bet amount
    4. Spin the slot machine
    5. Check if the player won
    6. Provide the user their winnings
    7. Play again option
*/
const prompt = require("prompt-sync")();

const ROWS = (COLS = 3);

const SYMBOL_COUNT = {
  "🔥": 6,
  "😊": 8,
  "💀": 8,
  "🎃": 7,
};

const SYMBOL_VALUES = {
  "🔥": 10,
  "😊": 4,
  "💀": 1,
  "🎃": 5,
};

// Deposit Function
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter the deposit amount: ");
    //   console.log(depositAmount);
    const numDepositAmount = parseFloat(depositAmount);

    if (isNaN(numDepositAmount) || numDepositAmount < 0) {
      console.log("Invalid deposit amount, please try again.");
    } else {
      return numDepositAmount;
    }
  }
};

// # of lines function
const getNoOfLines = () => {
  while (true) {
    const lines = prompt("Enter the # of lines to bet on (1-3); ");
    const noOfLines = parseFloat(lines);

    if (isNaN(noOfLines) || noOfLines <= 0 || noOfLines > 3) {
      console.log("Invalid # of lines, please try again.");
    } else {
      return noOfLines;
    }
  }
};

// getBet function
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const finBet = parseFloat(bet);

    if (isNaN(finBet) || finBet <= 0 || finBet > balance / lines) {
      console.log("Invalid Bet, please try again.");
    } else {
      return finBet;
    }
  }
};

// SpinBox Function
const spinBox = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) symbols.push(symbol);
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

const rowsPrint = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

// getWinnings Function
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log("Your current balance is $", balance);
    const noOfLines = getNoOfLines();
    const linBet = getBet(balance, noOfLines);
    balance -= linBet * noOfLines;
    const reels = spinBox();
    const rows = transpose(reels);
    rowsPrint(rows);
    const winnings = getWinnings(rows, linBet, noOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0) {
      console.log("You ran out of money!!!");
      break;
    }

    const playAgain = prompt("Do you want to play again (y/n) ? ");

    if (playAgain != "y") break;
  }
};
// console.log(balance, noOfLines, finBet);
// console.log(reels);
// console.log(rows);
// console.log(rowString);
