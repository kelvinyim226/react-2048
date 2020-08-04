export const Board_WIDTH = 4;
export const Board_HEIGHT = 4;
export const cloneDeep = require("lodash/cloneDeep");

export function random(num) {
  return Math.floor(Math.random() * num);
}
export const createBoard = () => Array.from(Array(4), () => Array(4).fill(0));

export const initiateBoard = () => {
  const startingBoard = createBoard();
  addNumber(startingBoard);
  addNumber(startingBoard);
  return startingBoard;
};

export const addNumber = (board) => {
  let added = false;
  let attempts = 0;
  while (!added) {
    let firstRan = random(Board_WIDTH);
    let secRan = random(Board_WIDTH);
    if (board[firstRan][secRan] === 0) {
      board[firstRan][secRan] = 512;
      added = true;
    }
    attempts++;
    if (attempts > 50) {
      alert("game over");
      break;
    }
  }
  return board;
};

