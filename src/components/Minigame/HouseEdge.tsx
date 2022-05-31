import React from 'react';
import styled from 'styled-components';

const HouseEdge: React.FC = () => {
  return (
    <StyledHouseEdge>
      <span>House Edge 1%</span>
    </StyledHouseEdge>
  );
}

const StyledHouseEdge = styled.div`
  position: absolute;
  z-index: 2;
  right: 1.5rem;
  bottom: 1.25rem;
  font-weight: 500;
  min-width: 8.75rem;
  padding: 0 1.125rem;
  border-radius: 1.125rem;
  height: 2.25rem;
  line-height: 2.25rem;
  background-color: ${({ theme }) => theme.colors.input};
`

export default HouseEdge;