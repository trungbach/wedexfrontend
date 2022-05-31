import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import TableBets from './TableBets';
import { TypeTableBet } from '../types';
import TableHighRoller from './TableHighRoller';
import TableWagerContest from './TableWagerContest';

const { TabPane } = Tabs;

interface Props {
  name?: string;
}

const GameTabs: React.FC<Props> = () => {
  return (
    <StyledGameTabs>
      <StyledTabs>
        <TabPane tab="All Bets" key="1">
          <StyledTabView>
            <StyledTabViewInner>
              <TableBets typeBet={TypeTableBet.ALL_BETS} />
            </StyledTabViewInner>
          </StyledTabView>
        </TabPane>
        <TabPane tab="My bets" key="2">
          <StyledTabView>
            <StyledTabViewInner>
              <TableBets typeBet={TypeTableBet.MY_BETS} />
            </StyledTabViewInner>
          </StyledTabView>
        </TabPane>
        <TabPane tab="High rollers" key="3">
          <StyledTabView>
            <StyledTabViewInner>
              <TableHighRoller />
            </StyledTabViewInner>
          </StyledTabView>
        </TabPane>
        <TabPane tab="Wager contest" key="4">
          <StyledTabView>
            <StyledTabViewInner>
              <TableWagerContest />
            </StyledTabViewInner>
          </StyledTabView>
        </TabPane>
      </StyledTabs>
    </StyledGameTabs>
  );
}

const StyledGameTabs = styled.div`
  margin-top: 2.5rem;
`

const StyledTabs = styled(Tabs)`  
  margin-top: 2.5rem;
  .ant-tabs-ink-bar {
    display: none;
  }
  & > .ant-tabs-nav {
    ::before {
      border-bottom: none;
    }
  }
  & > .ant-tabs-nav  .ant-tabs-nav-list {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    width: fit-content;
    background-color: ${({ theme }) => theme.colors.input};
    .ant-tabs-tab {
      background-color: transparent;
      padding: 0 1.25rem;
      border-radius: 1.125rem;
      font-size: 16px;
      height: 100%;
      margin: 0;
      .ant-tabs-tab-btn {
        transition: none;
        color: ${({ theme }) => theme.colors.textSubtle};
      }
      &:hover {
        .ant-tabs-tab-btn {
          color: ${({ theme }) => theme.colors.contrast};
        }
      }
    }
    .ant-tabs-tab-active {
      border: none !important;
      background-image: linear-gradient(to left,#555966,#555966,#58ae14);
      .ant-tabs-tab-btn {
        color: ${({ theme }) => theme.colors.contrast};
        font-weight: 700;
      }
    }
  }
`

const StyledTabView = styled.div`
   background-color: ${({ theme }) => theme.colors.backgroundAlt};
   border-radius: 1.25rem;
  padding: 1px 0;
  position: relative;
`

const StyledTabViewInner = styled.div`
  min-height: 30rem;
  padding: 0.5rem;
`

export default GameTabs;