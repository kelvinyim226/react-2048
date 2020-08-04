import React from "react";
import { StyledBoard } from "./styles/StyledBoard";
import { Display } from "./styles/Display";

import Cell from "./Cell";

const Board = ({ Board, gameOver, won }) => (
  <StyledBoard width={Board.length} height={Board.length}>
    {gameOver ? (
      <Display>Game Over</Display>
    ) : won ? (
      <Display>You Won</Display>
    ) : (
      ""
    )}
    {Board.map((row) => row.map((cell, x) => <Cell key={x} value={cell} />))}
  </StyledBoard>
);

export default Board;
