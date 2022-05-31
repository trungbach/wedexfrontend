import InputCoinBet from 'components/Minigame/InputCoinBet';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, TabMenu } from 'wedex-uikit/src';
import BetButton from 'components/Minigame/BetButton';
import { TabContent, WinAmount } from './TabContent';
import { TabControl } from '../../types';

interface Props {
  value: number;
}

const GameControl: React.FC<Props> = () => {

  const [activeIndex, setActiveIndex] = useState(TabControl.MANUAL); // default manual control.

  return (
    <StyledGameControl>
      <StyledTabMenu
        activeIndex={activeIndex}
        onItemClick={(index) => { setActiveIndex(index) }}
      >
        <StyledTab>Manual</StyledTab>
        <div style={{ opacity: 0 }}>
          <StyledTab >Auto</StyledTab>
        </div>
      </StyledTabMenu>

      <div className='mt-4'>
        {/* Manual Tab Content */}
        <TabContent id={TabControl.MANUAL} activeIndex={activeIndex}>
          <InputCoinBet />
          <WinAmount winAmount={1} />
          <BetButton content='Roll Now' />
        </TabContent>

        {/* Auto Tab Content */}
        <TabContent id={TabControl.AUTO} activeIndex={activeIndex}>
          <h2>tab2</h2>
          <h2>tab2</h2>
        </TabContent>
      </div>

    </StyledGameControl >
  );
}

const StyledGameControl = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  padding: 0.625rem;
  border-right: 1px solid rgba(49,52,60,.5);
`;

const StyledTabMenu = styled(TabMenu)`
  border-bottom: none;
  flex-direction: column;
`;

const StyledTab = styled(Tab)`
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  border-radius: 1.375rem;
  align-items: center;
  width: 50%;
`
export default GameControl;