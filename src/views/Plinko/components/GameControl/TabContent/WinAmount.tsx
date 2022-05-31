import React from 'react';
import { Flex, Input } from 'wedex-uikit/src';
import styled from 'styled-components';

interface Props {
  winAmount: number;
}

const WinAmount: React.FC<Props> = () => {
  return (
    <div className='mt-4'>
      <Flex justifyContent="space-between" className='mb-2 px-3'>
        <span>Win Amount</span>
        <span>0.00010000 USD</span>
      </Flex>
      <GameWinAmount>
        <CoinImg src="https://bc.game/coin/USDT.black.png" alt="" />
        <StyledInput disabled readOnly value={1} />
      </GameWinAmount>
    </div>
  );
}

const CoinImg = styled.img`
  order: -1;
  margin-right: 0.3125rem;
  margin-left: -0.625rem;
  width: 1.25rem;
  height: 1.25rem;
`

const GameWinAmount = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 1.5rem;
  padding: 0 1.375rem;
`

const StyledInput = styled(Input)`
  &&  {
    background-color: transparent;
  }
`

export default WinAmount;