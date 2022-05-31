import React from 'react';
import styled from 'styled-components';
import CrashControl from './CrashControl/CrashControl';
import GameView from './GameView/GameView';

interface Props {
  name?: string;
}

const GameMain: React.FC<Props> = () => {
  return (
    <StyledGameMain>
      <CrashControl />
      <GameView />
      {/* <GameActions /> */}
    </StyledGameMain>
  );
}

const StyledGameMain = styled.div`
  min-height: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  position: relative;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`
export default GameMain;