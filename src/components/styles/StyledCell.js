import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: ${props => (props.value === 0 ? 'rgba(232, 232, 232, 1)' : 'rgba(232, 232, 232, 1)')};
  border: 3px solid;
  border-color: rgba(191, 191, 191, 1);
  display: flex;
  justify-content: center;
  align-items: center;
   
  span{
      color: slategrey;
      font-size: x-large;
      font-weight: bold;
  }
`
;