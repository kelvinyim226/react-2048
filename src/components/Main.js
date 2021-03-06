import React, { useState } from "react";
import { StyledWrapper } from "./styles/StyledBackground";
import { createBoard, initiateBoard, Board_WIDTH, random } from "../gameHelper";
import Board from "./Board";
import StartButton from "./StartButton";
import { useBoard } from "../hooks/useBoard";
const cloneDeep = require("lodash/cloneDeep");

const Main = () => {
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [board, setBoard, updateBoard] = useBoard(createBoard());

  const startGame = () => {
    setBoard(initiateBoard());
    setGameOver(false);
    setWon(false);
  };

  const addRandomNumber = (board) => {
    let added = false;
    let attempts = 0;
    while (!added) {
      let firstRan = random(Board_WIDTH);
      let secRan = random(Board_WIDTH);
      if (board[firstRan][secRan] === 0) {
        if (firstRan > random(Board_WIDTH)) {
          board[firstRan][secRan] = 2;
        } else {
          board[firstRan][secRan] = 4;
        }
        added = true;
      }
      attempts++;
      if (attempts > 100) {
        setGameOver(true);
        break;
      }
    }
    return board;
  };

  function checkGameOver(newBoard) {
    for (let i = 0; i < 4; i++) {
      let row = newBoard[i].filter((val) => val !== 0);
      if (row.length < 4) return false;
      let firstBlock = 0;
      let secondBlock = 1;
      while (firstBlock < row.length - 1) {
        if (row[secondBlock]) {
          if (row[firstBlock] === row[secondBlock]) return false;
          firstBlock++;
          secondBlock = firstBlock + 1;
        }
      }
    }
    let rotatedBoard = rotate(newBoard);
    for (let i = 0; i < 4; i++) {
      let row = rotatedBoard[i].filter((val) => val !== 0);
      let firstBlock = 0;
      let secondBlock = 1;
      while (firstBlock < row.length - 1) {
        if (row[secondBlock]) {
          if (row[firstBlock] === row[secondBlock]) return false;
          firstBlock++;
          secondBlock = firstBlock + 1;
        }
      }
    }
    setGameOver(true);
  }

  function rotate(matrix) {
    let rotatedMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let row = matrix.map((e) => e[i]).reverse();
      rotatedMatrix.push(row);
    }
    return rotatedMatrix;
  }

  const moveBoard = (direction) => {
    let prevBoard = cloneDeep(board);
    for (let i = 0; i < direction; ++i) {
      prevBoard = rotate(prevBoard);
    }
    let newBoard = updateBoard(prevBoard, setWon);
    for (let i = direction; i < 4; ++i) {
      newBoard = rotate(newBoard);
    }
    if (JSON.stringify(board) !== JSON.stringify(newBoard)) {
      addRandomNumber(newBoard);
    }
    checkGameOver(newBoard);
    return newBoard;
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        setBoard(moveBoard(0));
      } else if (keyCode === 38) {
        setBoard(moveBoard(3));
      } else if (keyCode === 39) {
        setBoard(moveBoard(2));
      } else if (keyCode === 40) {
        setBoard(moveBoard(1));
      }
    }
  };

  return (
    <StyledWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
      <Board Board={board} gameOver={gameOver} won={won} />
      <aside>
        <StartButton callback={startGame} />
      </aside>
    </StyledWrapper>
  );
};

export default Main;
