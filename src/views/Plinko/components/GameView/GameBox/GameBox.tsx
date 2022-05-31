import BoxBackground from 'components/Minigame/BoxBackground';
import HouseEdge from 'components/Minigame/HouseEdge';
import React from 'react';
import styled from 'styled-components';
import PlinkoCanvas from './PlinkoCanvas';
// interface Props {

// }

const GameBox: React.FC = () => {
  return (
    <StyledGameBox>
      <HouseEdge />
      <BoxBackground />
      <PlinkoCanvas />
    </StyledGameBox>
  );
}

const StyledGameBox = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: relative;
  padding: 0 10%;
  min-height: 37.5rem;
`

export default GameBox;