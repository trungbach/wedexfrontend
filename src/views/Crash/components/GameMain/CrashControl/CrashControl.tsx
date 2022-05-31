import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import ManualControl from './ManualControl';

const { TabPane } = Tabs;

interface Props {
  name?: string;
}

const CrashControl: React.FC<Props> = () => {
  return (
    <StyledCrashControl>
      <StyledTabs tabPosition="left">
        <TabPane tab="Manual" key="1">
          <ManualControl />
        </TabPane>
        <TabPane tab="Advanced" key="2">
          Content of Tab 2
        </TabPane>
      </StyledTabs>
    </StyledCrashControl>
  );
}

const StyledCrashControl = styled.div`
  display: flex;
  order: 2;
  min-height: 230px;
  margin-top: 1px;
`

const StyledTabs = styled(Tabs)`  
width: 100%;
  .ant-tabs-ink-bar {
    display: none;
  }
  & > .ant-tabs-nav {
    ::before {
      border-bottom: none;
    }
  }
  & > .ant-tabs-nav  .ant-tabs-nav-list {
    margin-left: 0.625rem;
    display: inline-flex;
    align-items: center;
    position: relative;
    width: fit-content;
    .ant-tabs-tab {
      background-color: transparent;
      padding: 0 1.25rem;
      font-size: 16px;
      height: 100%;
      margin: 0;
      width: 3rem;
      position: relative;
      border-right: 1px solid ${({ theme }) => theme.colors.input};;

      .ant-tabs-tab-btn {
        transition: none;
        color: ${({ theme }) => theme.colors.disabled};
        transform: rotate(270deg);
        transform-origin: 0 0;
        position: absolute;
        bottom: 0;
        left: 0;
        margin-left: 10px;
      }
    }
    .ant-tabs-tab-active {
      border-right: 2px solid ${({ theme }) => theme.colors.primary};
       background-image: linear-gradient(to left,rgba(91,174,28,.175),rgba(0,0,0,0) 50%);
      .ant-tabs-tab-btn {
        color: ${({ theme }) => theme.colors.contrast};
        font-weight: 700;
      }
    }
  }
`

export default CrashControl;