import React, { useState } from 'react';
import styled from 'styled-components';
import { Slider } from 'antd';

interface Props {
  isShowBetSlider: boolean
}

const SliderAmountBet: React.FC<Props> = ({ isShowBetSlider }) => {

  const [sliderValue, setSliderValue] = useState(50); // average = 50

  const handleChangeSlider = (value: number) => {
    setSliderValue(value);
  }

  return (
    <StyledSliderAmountBet isShowBetSlider={isShowBetSlider}>
      <button type='button' onClick={() => setSliderValue(0)}>Min</button>
      <SliderWrapper>
        <Slider value={sliderValue} onChange={handleChangeSlider} />
      </SliderWrapper>
      <button type='button' onClick={() => setSliderValue(100)}>Max</button>
    </StyledSliderAmountBet>
  );
}

const StyledSliderAmountBet = styled.div<Props>`
  position: absolute;
  right: 0;
  top: 2.875rem;
  z-index: 2;
  touch-action: pan-x;
  width: 200px;
  height: 2.5rem;
  display: ${props => props.isShowBetSlider ? "flex" : "none"};
  align-items: center;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors.input};
  overflow: hidden;
  box-shadow: 1px 0 7px rgb(0 0 0 / 15%);
  transition: 0.2s ease-in-out;
  & > button {
    height: 100%;
    width: 2.5rem;
    flex: none;
    font-size: .75rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.inputSecondary};
    color: ${({ theme }) => theme.colors.textSubtle};
    &:hover {
      color: ${({ theme }) => theme.colors.textSubtle};
      filter: brightness(115%);
      font-weight: 700;
    }
  }
`

const SliderWrapper = styled.div`
  flex-grow: 1;
  & > .ant-slider {
    margin: 10px 9px;
    .ant-slider-rail,  .ant-slider-track {
      background-color: transparent;
    }
    .ant-slider-step {
      background: ${({ theme }) => theme.colors.inputSecondary};
      border-radius: 0.25rem;
      height: 0.5rem;
    }
  }
  & > .ant-slider > .ant-slider-handle {
    top: 20%;
    bottom: 20%;
    left: 0.3125rem;
    width: 0.75rem;
    height: 100%;
    border-radius: 0.375rem;
    background-color: #cccfd9;
    border: none; 
    height: 1.5rem;
    margin-top: -9px;
    &:focus {
      box-shadow: none;
    }
  }
`

export default SliderAmountBet;