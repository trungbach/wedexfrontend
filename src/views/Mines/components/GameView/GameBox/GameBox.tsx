import React from 'react'
import styled from 'styled-components'
import BoxBackground from 'components/Minigame/BoxBackground'
import GameSlider from './GameSlider'
import SliderStar from './SliderStar'

// interface Props {

// }

const GameBox: React.FC = () => {
  return (
    <StyledGameBox>
      <HouseEdge>
        <span>House Edge 1%</span>
      </HouseEdge>

      <GameSlider />
      <SliderStar />
      <BoxBackground />
    </StyledGameBox>
  )
}

const StyledGameBox = styled.div`
  position: relative;
  background-image: url('/images/minigame/bg-mines.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HouseEdge = styled.div`
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
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
`

export default GameBox
