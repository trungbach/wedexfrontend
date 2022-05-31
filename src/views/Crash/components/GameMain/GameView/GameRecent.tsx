import BankRoll from 'components/Minigame/BankRoll';
import React from 'react';
import styled from 'styled-components';
import { Flex } from 'wedex-uikit/src';

interface Props {
  recentResults?: number[];
}

const GameRecent: React.FC<Props> = () => {

  const customRecentResults = [
    {
      id: 4852730,
      result: 2.09
    },
    {
      id: 4852731,
      result: 2.09
    },
    {
      id: 4852730,
      result: 2.09
    },
    {
      id: 4852730,
      result: 2.09
    },
    {
      id: 4852730,
      result: 2.09
    },
  ]

  return (
    <StyledGameRecent>
      <StyledBankRoll bankRoll={Number(5225504.82)} />
      <RecentListWrapper>
        <RecentList style={{ width: "125%", transform: "translate(0%, 0px)" }}>
          {
            customRecentResults.map((item, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <RecentItem key={index} style={{ width: "20%" }}>
                  <StyledId>
                    {item.id}
                  </StyledId>
                  <div>
                    {item.result}x
                  </div>
                </RecentItem>
              )
            })
          }
        </RecentList>
      </RecentListWrapper>

      <Trends>
        <svg xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="/images/minigame/symbol-defs.svg#icon_Trends" /></svg>
        Trends
      </Trends>
    </StyledGameRecent>
  );
}

const StyledGameRecent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`

const StyledBankRoll = styled(BankRoll)`
  width: 10.125rem;
  height: 100%;
  position: relative;
`

const RecentListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 1.375rem;
  padding: 0 0.625rem;
  margin: 0 0.625rem;
  flex: auto;
  height: 100%;
  margin: 0 1.5rem;
  overflow: hidden;
  position: relative;
`

const RecentList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

const RecentItem = styled.div`
  /* width: 20%; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: .875rem;
  background-color: transparent;
  position: relative;
  padding-left: 1.4375rem;
  color: #ed6300;
  text-align: left;
  align-items: flex-start;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    left: 0.125rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    transform: translateY(-50%);
    background-color: #ed6300;
  }
`

const StyledId = styled.div`
  font-size: 1rem;
  font-weight: 400;
  transform: scale(.7);
  width: 3.125rem;
  transform-origin: left center;
  margin-bottom: 0.125rem;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const Trends = styled(Flex)`
cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  color: ${({ theme }) => theme.colors.textSubtle};
  min-height: 1.875rem;
  font-size: 1rem;
  svg {
    margin-right: 0.375rem;
    width: 1.4rem;
    height: 1.4rem;
    fill: ${({ theme }) => theme.colors.textSubtle};
  }
`

export default GameRecent;