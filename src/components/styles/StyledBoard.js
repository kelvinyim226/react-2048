import styled from 'styled-components';

export const StyledBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(35vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 4px solid rgba(108, 122, 137, 1);
  width: 100%;
  max-width: 35vw;
  background: rgba(191, 191, 191, 1);
  margin: auto;
  margin-right: 10px;
`;