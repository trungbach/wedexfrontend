import React from 'react';
import styled from 'styled-components';
import { Input } from 'wedex-uikit/src';
import Text from 'components/Text';

interface Props {
  text?: string;
}

const GameInfoRoll: React.FC<Props> = () => {
  return (
    <StyledGameInfoRoll>
      {/* Payout */}
      <SliderInput>
        <StyledLabel>Payout</StyledLabel>
        <GameInput>
          <StyledInput />
          <Text type="primary">x</Text>
        </GameInput>
      </SliderInput>

      {/* Role Switch */}
      <SliderInput>
        <StyledLabel>Role Under</StyledLabel>
        <GameInput noBorder>
          <StyledInput readOnly />
          <Text type="primary">x</Text>
        </GameInput>
      </SliderInput>

      {/* Win Chance */}
      <SliderInput>
        <StyledLabel>Win Chance</StyledLabel>
        <GameInput>
          <StyledInput />
          <Text type="primary">%</Text>
          <ButtonGroup>
            <ButtonControl>Min</ButtonControl>
            <ButtonControl>-5</ButtonControl>
            <ButtonControl>+5</ButtonControl>
            <ButtonControl>Max</ButtonControl>
          </ButtonGroup>
        </GameInput>
      </SliderInput>
    </StyledGameInfoRoll>
  );
}

const StyledGameInfoRoll = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 7.375rem;
  align-items: center;
  border-radius: 1.25rem;
  padding: 1rem 0 1rem 1.5rem;
  box-shadow: var(--mk4xbc);

  & > div:last-child {
    width: 45%;
    min-width: 15rem;
    flex: 2;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.625rem;
    align-items: center;
    height: 10.75rem;
    min-width: 100%;
    padding-right: 0;
  }
`

const SliderInput = styled.div`
flex: 1;
margin-top: 0;
min-width: 7.5rem;
margin-right: 1.5rem;
`

const StyledLabel = styled.div`
margin: 0 1.125rem 0.375rem;
display: flex;
align-items: center;
line-height: 1em;
height: 1.25rem;
margin: 0 0.75rem 0.375rem;
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

const ButtonGroup = styled.div`
  margin-left: 0.625rem;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 1.5rem;
  margin-right: -1.125rem;
  & > span: first-child {
    border-radius: 1.5rem 0 0 1.5rem;
  }
  & > span: last-child {
    border-radius: 0 1.5rem 1.5rem 0;
  }
`

const ButtonControl = styled.span`
  font-size: 0.8rem;
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
  color: ${({ theme }) => theme.colors.text};
    &:hover {
    filter: brightness(115%);
  }
`

export default GameInfoRoll;