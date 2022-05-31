import React, { useState } from 'react';
import styled from 'styled-components';
import { Tab, TabMenu } from 'components/Minigame/MinigameTabMenu';
import { TypeBet } from '../types';

interface Props {
  name?: string;
}

const TypeBetTabs: React.FC<Props> = () => {

  const [activeIndex, setActiveIndex] = useState(TypeBet.CLASSIC); // default classic bets.

  return (
    <StyledTabsWapper>
      <TabMenu
        activeIndex={activeIndex}
        onItemClick={(index) => { setActiveIndex(index) }}
      >
        <StyledTab>Classic</StyledTab>
        <StyledTab >Trenball</StyledTab>
      </TabMenu>
    </StyledTabsWapper>

  );
}

const StyledTabsWapper = styled.div`
  margin: 0 0.625rem 0.75rem;
  display: flex;
  align-items: center;
`

const StyledTab = styled(Tab)`

  text-align: center;
  border-radius: 1.125rem;
  align-items: center;
`

export default TypeBetTabs;