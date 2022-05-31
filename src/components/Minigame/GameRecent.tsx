import React from 'react';
import styled from 'styled-components';
import { Flex } from 'wedex-uikit/src';
import BankRoll from './BankRoll';

interface Props {
  listRecents?: number[];
}

type RecentProps = {
  isWin?: boolean;
}

const GameRecent: React.FC<Props> = ({ listRecents = [] }) => {

  const renderListRecents = listRecents.length === 0 ?
    <StyledNoRecent>
      Game results will be displayed here.
    </StyledNoRecent>
    :
    <RecentList>
      {listRecents.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <RecentItem key={index}>
          <ItemWrap isWin>
            {item}
          </ItemWrap>
        </RecentItem>
      ))}
    </RecentList>

  return (
    <div>
      <RecentFlex justifyContent="space-between">
        <BankRoll bankRoll={Number(5225504.82)} />
        <RecentListWrap>
          {renderListRecents}
        </RecentListWrap>
      </RecentFlex>
    </div>
  );
}

const RecentFlex = styled(Flex)`
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  font-weight: bold;
`

const RecentListWrap = styled.div`
  flex: auto;
  height: 100%;
  margin: 0 1.5rem;
  overflow: hidden;
  position: relative;
  border-radius: 1.375rem;
`

const RecentList = styled(Flex)`
  width: 114.286%;
  transform: translate(0%, 0px);
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

const RecentItem = styled.div`
  width: 12.5%;
  padding: 0 0.25rem;
  cursor: pointer;
`
const ItemWrap = styled.div<RecentProps>`
  color: ${props => props.isWin ? ({ theme }) => theme.colors.text : ({ theme }) => theme.colors.secondary};
  background-color: ${props => props.isWin ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.backgroundDisabled};
  height: 100%;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledNoRecent = styled.div`
  border-radius: 1.5rem;
  display: flex;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.textSubtle};
    background-color: ${({ theme }) => theme.colors.input};
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 1.375rem;
`

export default GameRecent;