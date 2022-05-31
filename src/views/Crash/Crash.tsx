import GameTabs from 'components/Minigame/GameTabs';
import React from 'react';
import { GameWrapper, GameArea } from 'style/Minigame';
import TypeBetTabs from './components/TypeBetTabs';
import GameMain from './components/GameMain';
import AllBets from './components/AllBets';

const Crash: React.FC = () => {
  return (
    <GameWrapper>
      <TypeBetTabs />
      <GameArea>
        <GameMain />
        <AllBets />
      </GameArea>
      <GameTabs />
    </GameWrapper >
  );
}
export default Crash;