export const Board_WIDTH = 4;
export const Board_HEIGHT = 4;
export const cloneDeep = require('lodash/cloneDeep');

export function random (num) {
    return Math.floor(Math.random() * num)
  }
export const createBoard = () =>
Array.from(Array(4), () =>
    Array(4).fill(0)
  )

export const initiateBoard = () => {
  const startboard = (createBoard())
  addNumber(startboard)
  addNumber(startboard)
  return startboard
   
 
}

export const addNumber = (prevBoard) => {
  let added = false;
  let attempts = 0;
  while(!added){
    let firstRan = random(Board_WIDTH);
    let secRan = random(Board_WIDTH);
  if(prevBoard[firstRan][secRan] === 0){
      prevBoard[firstRan][secRan] = 2
      added = true;
    }
    attempts++;
    if (attempts > 50) {
      alert("game over");
      break;
    }

  }
  return prevBoard
}

export const addRandomNumber = (prevBoard) => {
  let added = false;
  let attempts = 0;
  while(!added){
    let firstRan = random(Board_WIDTH);
    let secRan = random(Board_WIDTH);
  if(prevBoard[firstRan][secRan] === 0){
      if(firstRan > random(Board_WIDTH)){
      prevBoard[firstRan][secRan] = 2
      }else{
        prevBoard[firstRan][secRan] = 4
      }
      added = true;
    }
    attempts++;
    if (attempts > 50) {
      alert("game over");
      break;
    }

  }
  return prevBoard
}
