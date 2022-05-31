import Text from 'components/Text'
import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Input } from 'wedex-uikit/src'
import { MinigameSlider } from 'components/Minigame/MinigameSlider'
import { Button } from 'antd'

// interface Props {

// }

const SliderStar: React.FC = () => {
  return (
    <StyledSliderStar>
      <DivStarIndex1>{}</DivStarIndex1>
      <DivStarIndex2>{}</DivStarIndex2>
      <DivStarIndex3>{}</DivStarIndex3>
      <DivStarIndex4>{}</DivStarIndex4>
    </StyledSliderStar>
  )
}

const StyledSliderStar = styled.div`
  position: absolute;
  left: 0;
  bottom: 30px;
  right: 0;
  height: 50px;
`

const animation = () =>
  css`
    ${lineSpin} 1.5s linear 1 normal running;
  `

const lineSpin = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const DivStarIndex1 = styled.div`
  transform: translate(-280px);
  width: 0.625rem;
  height: 0.625rem;
  position: absolute;
  left: 50%;
  top: 50%;
  :before {
    animation-delay: 0.1s !important;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/minigame/image-star-mines.png');
    animation: ${animation};
  }
`
const DivStarIndex2 = styled.div`
  transform: translate(-260px, -10px);
  width: 0.625rem;
  height: 0.625rem;
  position: absolute;
  left: 50%;
  top: 50%;
  :before {
    animation-delay: 0.6s !important;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/minigame/image-star-mines.png');
    animation: ${animation};
  }
`
const DivStarIndex3 = styled.div`
  transform: translate(300px, -10px);
  width: 0.625rem;
  height: 0.625rem;
  position: absolute;
  left: 50%;
  top: 50%;
  :before {
    animation-delay: 1.1s !important;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/minigame/image-star-mines.png');
    animation: ${animation};
  }
`

const DivStarIndex4 = styled.div`
  transform: translate(300px, -10px);
  width: 0.625rem;
  height: 0.625rem;
  position: absolute;
  left: 50%;
  top: 50%;
  :before {
    animation-delay: 1.6s !important;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/minigame/image-star-mines.png');
    animation: ${animation};
  }
`

export default SliderStar
