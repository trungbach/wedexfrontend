import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MinigameSlider } from 'components/Minigame/MinigameSlider';
import GameInfoRoll from './GameInfoRoll';
// interface Props {

// }

const GameSlider: React.FC = () => {

  const [sliderValue, setSliderValue] = useState(50); // average = 50
  const [diceResult, setDiceResult] = useState(20);

  const handleChange = (newValue: number) => {
    // eslint-disable-next-line no-console
    console.log(newValue);
    setSliderValue(newValue)
  };

  return (
    <StyledGameSlider>
      <SliderWrapper>
        <StyledSlider>
          <SlideTrack style={{ transform: `translate(${diceResult}%, 0px` }}>
            <DiceNum>{diceResult}</DiceNum>
            <DiceImage>
              <StyledDiceImage isWin src="/images/minigame/dice.webp" alt="dice-img" />
            </DiceImage>
          </SlideTrack>

          {/* Slider Input Dice */}
          <MinigameSlider
            name='slider'
            min={0}
            max={100}
            value={sliderValue}
            onValueChanged={handleChange}
            valueLabel={String(sliderValue)}
            step={1}
            disabled={false}
          />
        </StyledSlider>

        <SliderMark>
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </SliderMark>
      </SliderWrapper>

      <GameInfoRoll />

    </StyledGameSlider>
  );
}

const StyledGameSlider = styled.div`
  position: relative;
  text-align: left;
  width: 100%;
`

const SliderWrapper = styled.div`
  position: relative;
  height: 4rem;
  margin-bottom: 5rem;
  margin-top: 10rem;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 1rem;

`


const StyledSlider = styled.div`
  height:  4rem;
  position: absolute;
  top: 0;
  left: 1.125rem;
  bottom: 0;
  right: 1.125rem;
  transition: opacity .3s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SlideTrack = styled.div`
  position: absolute;
  left: 0%;
  bottom: 3rem;
  transition: transform .4s ease 0s;
  z-index: 99;
  width: 100%;
  height: 8.875rem;
  margin-left: -4.4375rem;
  display: flex;
  align-items: center;
`

const DiceNum = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.875rem;
  font-weight: 700;
  pointer-events: none;
  width: 9.25rem;
  height: 4.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -0.1875rem;
  top: -3rem;
  position: absolute;
  border-radius: 0.5rem;
  border: solid 0.3125rem ${({ theme }) => theme.colors.input};
  background-color: ${({ theme }) => theme.colors.background};
`

const DiceImage = styled.div`
  width: 8.875rem;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s ease 0s;
  transform-origin: center bottom;
  animation: .5s ease 0s 1 normal none running transDice-g17ie1or;
`

const lineSpin = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const animation = () =>
  css`${lineSpin} .5s infinite alternate;`

const StyledDiceImage = styled.img<{ isWin?: boolean }>`
  width: 4.125rem;
  margin-left: -0.25rem;

  ${({ isWin }) => isWin && `
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background: red center no-repeat;
      background-size: 100% 100%;
      animation: ${animation};
    }
  `}
`

const SliderMark = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
top: 5rem;
left: 0;
right: 0;
  & > span {
  width: 1.875rem;
  text-align: center;
  font-weight: bold;
}
`

export default GameSlider;