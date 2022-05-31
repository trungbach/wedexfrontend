import BetButton from 'components/Minigame/BetButton';
import InputCoinBet from 'components/Minigame/InputCoinBet';
import React from 'react';
import styled from 'styled-components';
import { Flex, Input } from 'wedex-uikit/src';
import Text from 'components/Text';

interface Props {
  manual?: string;
}

const ManualControl: React.FC<Props> = () => {
  return (
    <StyledManualControl>
      <StyledBetButton>
        <BetButton content='Bet' />
      </StyledBetButton>
      <StyledManualForm>
        <InputCoinBet />

        <AutoCashOut>
          <StyledCashOut justifyContent="space-between">
            <StyledLabel>Auto cash out</StyledLabel>
            <StyledLabel>Chance <span>0.99%</span></StyledLabel>
          </StyledCashOut>
          <GameInput>
            <StyledInput defaultValue="100.00" />
            <Text type="primary" bold fontSize={18}>x</Text>
          </GameInput>
        </AutoCashOut>
      </StyledManualForm>
    </StyledManualControl>
  );
}

const StyledManualControl = styled.div`
  padding: 1.25rem 1.375rem;
`

const StyledBetButton = styled.div`
  width: 60%;
  margin: 3.5rem auto;
`

const StyledManualForm = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  & > div {
    width: 47%;
  }
`

const AutoCashOut = styled.div`
  margin-top: 0;
  min-width: 7.5rem;
`

const StyledCashOut = styled(Flex)`
  color:  ${({ theme }) => theme.colors.textSubtle};
`

const StyledLabel = styled.div`
  margin: 0 1.125rem 0.375rem;
  display: flex;
  align-items: center;
  line-height: 1em;
  height: 1.25rem;
  margin: 0 0.75rem 0.375rem;
  span {
    margin-left: 0.3rem;
    color:  ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`

const GameInput = styled.div<{ noBorder?: boolean }>`
display: flex;
align-items: center;
background-color: ${({ theme }) => theme.colors.input};
border-radius: 1.5rem;
padding: 0 1.375rem 0 0.375rem;
  &:hover {
  box-shadow:  ${props => !props.noBorder ? "none" :
    `0px 0px 0px 1px ${({ theme }) => theme.colors.primary} , 0px 0px 0px 1px ${({ theme }) => theme.colors.primary} !important`
  };
}
`

const StyledInput = styled(Input)`
background-color: transparent;
font-weight: bold;
  &:focus {
  box-shadow: none!important;
}
`

export default ManualControl;