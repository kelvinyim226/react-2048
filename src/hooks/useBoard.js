import { useState } from "react";
import { createBoard } from "../gameHelper";
export const useBoard = () => {
  const [board, setBoard] = useState(createBoard());

  const updateBoard = (prevBoard, setWon) => {
    const resultBoard = [];
    for (let i = 0; i < 4; i++) {
      let row = prevBoard[i].filter((val) => val !== 0);
      let firstBlock = 0;
      let secondBlock = 1;
      while (firstBlock < row.length - 1) {
        if (row[secondBlock]) {
          if (row[firstBlock] === row[secondBlock]) {
            row[firstBlock] += row[secondBlock];
            row[secondBlock] = 0;
            if (row[firstBlock] === 2048) {
              setWon(true);
            }
          }
          firstBlock++;
          secondBlock = firstBlock + 1;
        }
      }
      for (let j = row.length; j < 4; j++) {
        row.push(0);
      }
      resultBoard.push(row);
    }
    return resultBoard;
  };

  return [board, setBoard, updateBoard];
};
