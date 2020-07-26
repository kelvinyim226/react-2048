import { useState } from 'react';
import { createBoard} from '../gameHelper';
export const useBoard = () => {
  const [board, setBoard] = useState(createBoard());

  // const moveBoard = (direction) => {
  //   let prevBoard = cloneDeep(board);
  //   for (let i = 0; i < direction; ++i) {
  //     prevBoard = rotate(prevBoard);
  //   }
  //   let newBoard = updateBoard(prevBoard);
  //   for (let i = direction; i < 4; ++i) {
  //     newBoard = rotate(newBoard);
  //   }
  //   setBoard(newBoard)
  //   if(win){
  //     alert('You Won!!')
  //   }
  // }
  
  const updateBoard = (prevBoard) => {
    const resultBoard = [];
    for(let i = 0 ; i < 4 ; i++){
      let row = prevBoard[i].filter(val => val !== 0);
      let firstBlock = 0;
      let secondBlock = 1;
      while(firstBlock < row.length-1){
        if(row[secondBlock]){
          if(row[firstBlock] === row[secondBlock]){
            row[firstBlock] += row[secondBlock];
            row[secondBlock] = 0
            if(row[firstBlock] === 2048){
              console.log(row[firstBlock])
            }
          }
          firstBlock++;
          secondBlock = firstBlock + 1;
        }
      }   
      for(let j = row.length; j < 4; j++){
        row.push(0)
      }
      resultBoard.push(row)
    }
    return resultBoard
  }

//   function rotate(matrix) {
//     let rotatedMatrix = [];
//     for(let i = 0; i < matrix[0].length; i++) {
//         let row = matrix.map(e => e[i]).reverse();
//         rotatedMatrix.push(row);
//     }
//     return rotatedMatrix;
// };


    




  return [board, setBoard, updateBoard];
};