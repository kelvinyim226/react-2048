import React from 'react';
import { StyledCell } from './styles/StyledCell';

const Cell = ({ value }) => (
<StyledCell ><span>{value === 0 ? '' : value }</span></ StyledCell>
)

export default Cell;