import { useState } from 'react';
import { createBoard, addRandomNumber} from '../gameHelper';
const cloneDeep = require('lodash/cloneDeep');
export const useBoard = () => {
  const [board, setBoard] = useState(createBoard());
  let win = false;

  const moveBoard = (direction) => {
    console.log(direction);
    let prevBoard = cloneDeep(board);
    console.log(prevBoard)
    for (let i = 0; i < direction; ++i) {
      prevBoard = rotate(prevBoard);
    }
    let newBoard = updateBoard(prevBoard);
    for (let i = direction; i < 4; ++i) {
      newBoard = rotate(newBoard);
    }
    setBoard(newBoard)
    if(win){
      alert('You Won!!')
    }
  }
  
  const updateBoard = (newBoard) => {
    const resultBoard = [];
    for(let i = 0 ; i < 4 ; i++){
      let row = newBoard[i].filter(val => val !== 0);
      let firstBlock = 0;
      let secondBlock = 1;
      if(row.length > 1){
        while(firstBlock < row.length-1){
          console.log('time',firstBlock)
          if(row[secondBlock]){
            if(row[firstBlock] === row[secondBlock]){
              row[firstBlock] += row[secondBlock];
              row[secondBlock] = 0
              if(row[firstBlock] === 2048){
                console.log(row[firstBlock])
                win = true;
              }
            }
            firstBlock++;
            secondBlock = firstBlock + 1;
          }
        }
      }
      for(let j = row.length; j < 4; j++){
        row.push(0)
      }
      resultBoard.push(row)
    }
    addRandomNumber(resultBoard)
    return resultBoard
  }

  function rotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};


    




  return [board, setBoard, moveBoard];
};
