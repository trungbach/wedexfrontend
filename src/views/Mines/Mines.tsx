import GameTabs from 'components/Minigame/GameTabs'
import React from 'react'
import { GameWrapper, GameArea, GameMain } from 'style/Minigame'
import GameControl from './components/GameControl/GameControl'
import GameView from './components/GameView'

const Mines: React.FC = () => {
  return (
    <GameWrapper>
      <GameArea>
        <GameMain>
          <GameControl value={1} />
          <GameView />
        </GameMain>
      </GameArea>

      <GameTabs />
    </GameWrapper>
  )
}
export default Mines
