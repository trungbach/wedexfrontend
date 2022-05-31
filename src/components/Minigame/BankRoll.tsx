import React from 'react';
import styled from 'styled-components';
import { Flex } from 'wedex-uikit/src';

interface Props {
  bankRoll: number;
}

const BankRoll: React.FC<Props> = ({ bankRoll }) => {
  return (
    <StyledBankRoll>
      <div>
        <TextPrimary>Bankroll</TextPrimary> USDT
      </div>
      <Flex alignItems="center" className='px-2'>
        <CoinImg src="https://bc.game/coin/USDT.black.png" alt="" />
        <span>{bankRoll}</span>
      </Flex>
    </StyledBankRoll>
  );
}

const StyledBankRoll = styled(Flex)`
  margin-left: 1.5rem;
  padding: 0.4rem 1.35rem;
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 1.5rem;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`

const CoinImg = styled.img`
  margin-right: 0.3125rem;
  margin-left: -0.625rem;
  width: 1rem;
  height: 1rem;
`
const TextPrimary = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`


export default BankRoll;