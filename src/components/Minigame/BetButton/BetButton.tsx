import React from 'react';
import styled from 'styled-components';
import { Button } from 'wedex-uikit/src';

interface Props {
  content: string;
}

const StyledButton = styled(Button)`
  border-radius: 6.25rem;
  width: 100%;
  margin-top: 1.875rem;
  height: 3.625rem;
`

const BetButton: React.FC<Props> = ({ content }) => {
  return (
    <StyledButton>
      {content}
    </StyledButton>
  );
}
export default BetButton;