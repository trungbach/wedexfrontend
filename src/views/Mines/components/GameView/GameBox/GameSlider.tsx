import Text from 'components/Text'
import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Input } from 'wedex-uikit/src'
import { MinigameSlider } from 'components/Minigame/MinigameSlider'
import { Button } from 'antd'

// interface Props {

// }

const GameSlider: React.FC = () => {
  const buttonArray = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
  ]

  return (
    <StyledGrid>
      {buttonArray.map(() => (
        <StyledButton>
          <StyledDiv>{}</StyledDiv>
        </StyledButton>
      ))}
    </StyledGrid>
  )
}

const StyledGrid = styled.div`
  margin: 1rem auto 0;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 0.5rem 0.625rem;
  max-width: 33.75rem;
  padding: 1.25rem;
  border-radius: 0.375rem;
  background: #111214;
  position: relative;
  :before {
    content: '';
    position: absolute;
    width: 5.3125rem;
    height: 0.875rem;
    background-image: url('/images/minigame/box-bg-mines2.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 1;
    top: -0.125rem;
    left: 0;
  }
  :after {
    content: '';
    position: absolute;
    top: -2.1875rem;
    right: 0.125rem;
    width: 11rem;
    height: 3.625rem;
    background-image: url('/images/minigame/box-bg-mines.webp');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`

const StyledButton = styled(Button)`
  width: 5.75rem;
  height: 5.25rem;
  position: relative;
  border: none;
  padding: 0;
  user-select: none;
  cursor: pointer;
  font-size: 0.875rem;
  background-color: transparent;
  :hover {
    background-color: transparent;
    cursor: default;
  }
`

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 0.25rem;
  background-color: #212328;
`

export default GameSlider
