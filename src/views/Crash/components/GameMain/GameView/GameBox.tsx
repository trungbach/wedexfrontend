import BoxBackground from 'components/Minigame/BoxBackground';
import HouseEdge from 'components/Minigame/HouseEdge';
import React from 'react';
import styled from 'styled-components';
import CrashCanvas from './Crash';

interface Props {
  recent?: number[];
}

const GameBox: React.FC<Props> = () => {
  return (
    <StyledGameBox>
      <HouseEdge />
      <CrashCanvas />
      <BoxBackground />
    </StyledGameBox>
  );
}

const StyledGameBox = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 1.875rem 1.875rem;
`
export default GameBox;