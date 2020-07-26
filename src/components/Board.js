import React from 'react';
import { StyledBoard } from './styles/StyledBoard';

import Cell from './Cell';

const Board = ({ Board }) => (
  <StyledBoard width={Board.length} height={Board.length}>
    {Board.map(row => row.map((cell, x) => <Cell key={x} value={cell} />))}
  </StyledBoard>
);

export default Board;
