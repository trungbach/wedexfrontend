import React from 'react';
import styled from 'styled-components';
import GameBox from './GameBox';
import GameRecent from './GameRecent';

interface Props {
  name?: string;
}

const GameView: React.FC<Props> = () => {
  return (
    <StyledGameView>
      <GameRecent />
      <GameBox />
    </StyledGameView>
  );
}

const StyledGameView = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export default GameView;