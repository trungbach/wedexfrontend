import React from 'react';
import styled from 'styled-components';

const BoxBackground: React.FC = () => {
  return (
    <StyledBoxBg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46">
      <defs>
        <linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#27292f" />
          <stop offset="100%" stopColor="#14181f" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g opacity=".899"><path fill="url(#gcardBg)" fillRule="evenodd" d="M0 0h996L892 46H96z" opacity=".898" transform="rotate(-180 498 23)" /></g>
    </StyledBoxBg>
  );
}

const StyledBoxBg = styled.svg`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  width: 100%;
`

export default BoxBackground;