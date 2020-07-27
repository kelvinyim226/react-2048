import React from 'react';
import { StyledBoard } from './styles/StyledBoard';
import { Display } from './styles/Display';

import Cell from './Cell';

const Board = ({ Board, gameOver }) => (
  <StyledBoard width={Board.length} height={Board.length}>
      {gameOver?<Display>Game Over</Display>:''}
    {Board.map(row => row.map((cell, x) => <Cell key={x} value={cell} />))}
  </StyledBoard>
);

export default Board;
