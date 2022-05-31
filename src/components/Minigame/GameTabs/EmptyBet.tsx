import React from 'react';
import styled from 'styled-components';


const EmptyBet: React.FC = () => {
  return (
    <StyledEmpty>
      <StyledImg src="/images/minigame/empty.webp" alt="empty" />
      <StyledText>Oops! There is no data yet!</StyledText>
    </StyledEmpty>
  );
}

const StyledEmpty = styled.div`
  min-height: 30rem;
  padding: 2.5rem 0;
  color: rgba(153,164,176,.6);
  line-height: 1;
  text-align: center;
  height: 100%;
  position: relative;
`

const StyledImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -6.875rem 0 0 -6.25rem;
  width: 12.5rem;
  height: 12.5rem;
`

const StyledText = styled.div`
  position: absolute;
  z-index: 1;
  line-height: 1.25rem;
  left: 50%;
  width: 17.5rem;
  top: 50%;
  margin-top: 3.75rem;
  transform: translate(-50%);
`
export default EmptyBet;