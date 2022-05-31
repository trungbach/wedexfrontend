import React from 'react'
import styled from 'styled-components'
import GameRecent from 'components/Minigame/GameRecent'
import GameBox from './GameBox'

// interface Props {

// }

const GameView: React.FC = () => {
  return (
    <StyledGameView>
      <GameRecent />
      <GameBox />
    </StyledGameView>
  )
}

const StyledGameView = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export default GameView
