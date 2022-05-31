import React from 'react';
import styled from 'styled-components';

interface Props {
  type: "primary" | 'secondary';
  fontSize?: number;
  children: any;
  bold?: boolean;
}

const Text: React.FC<Props> = ({ type = "primary", fontSize, children, bold }) => {
  return (
    <StyledText type={type} fontSize={fontSize} bold={bold}>{children}</StyledText>
  );
}

const StyledText = styled.span<Props>`
  font-weight: ${props => props.bold ? 700 : 400};
  font-size: ${(props) => props.fontSize}px;
  color: ${props => props.type === "primary" ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.secondary};
`
export default Text;