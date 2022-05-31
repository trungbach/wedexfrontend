import React, { useRef, useState } from 'react';
import { Flex, Input } from 'wedex-uikit/src';
import styled from 'styled-components';
import useOnClickOutside from 'hooks/useOnClickOutside';
import SliderAmountBet from './SliderAmountBet';

// interface Props {

// }

const InputCoinBet: React.FC = () => {

  const [isShowBetSlider, setIsShowBetSlider] = useState(false);
  const ref = useRef(null);

  const handleShowBetSlider = () => {
    setIsShowBetSlider(true);
  }
  const handleClickOutside = () => {
    setIsShowBetSlider(false);
  }

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div>
      <StyledHeader justifyContent="space-between" className='mb-2 px-3'>
        <span>Amount</span>
        <span>0.00010000 USD</span>
      </StyledHeader>
      <GameInput>
        <CoinImg src="https://bc.game/coin/USDT.black.png" alt="" />
        <StyledInput defaultValue={0.000100} />
        <ButtonGroup>
          <ButtonControl>/2</ButtonControl>
          <ButtonControl>x2</ButtonControl>
          <ButtonControl onClick={handleShowBetSlider}>
            <ButtonControlArrow ref={ref}>
              <img src="/images/minigame/up-arrow.png" alt="" />
              <img src="/images/minigame/down-arrow.png" alt="" />
              <SliderAmountBet isShowBetSlider={isShowBetSlider} />
            </ButtonControlArrow>
          </ButtonControl>
        </ButtonGroup>
      </GameInput>
    </div>
  );
}

const StyledHeader = styled(Flex)`
  color: ${({ theme }) => theme.colors.textSubtle};
`


const GameInput = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 1.5rem;
  padding: 0 1.375rem;
  &:visited {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.primary} , 0px 0px 0px 1px ${({ theme }) => theme.colors.primary} !important;
  }
`

const StyledInput = styled(Input)`
  background-color: transparent;
  font-weight: bold;
  &:focus {
    box-shadow: none !important;
  }
`

const CoinImg = styled.img`
  order: -1;
  margin-right: 0.3125rem;
  margin-left: -0.625rem;
  width: 1.25rem;
  height: 1.25rem;
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  width: 8.375rem;
  position: relative;
  border-radius: 1.5rem;
  margin-right: -1.125rem;
  & > span:first-child {
    border-radius: 1.5rem 0 0 1.5rem;
  }
  & > span:last-child {
    border-radius: 0 1.5rem 1.5rem 0 ;
  }
`

const ButtonControl = styled.span`
  cursor: pointer;
  height: 2.25rem;
  width: 2.75rem;
  padding: 0;
  background: var(--1ez8use);
  margin-left: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.inputSecondary};
  color: ${({ theme }) => theme.colors.textSubtle};
 
  &:hover {
    filter: brightness(115%);
  }
`

const ButtonControlArrow = styled(ButtonControl)`
  flex-direction: column;
  border-radius: 0 1.5rem 1.5rem 0 ;
  & > img {
    width: 0.75rem;
    height: 0.75rem;
  }
`

export default InputCoinBet;