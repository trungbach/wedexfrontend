import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import { Flex } from "wedex-uikit/src";
import { TabMenuProps } from "./types";

const Wrapper = styled(Flex)`
  flex-direction: column;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Inner = styled(Flex)`
  width: fit-content;
  justify-content: space-between;
  flex-grow: 1;
  height: 2.25rem;
  border-radius: 1.125rem;
  background-color:  ${({ theme }) => theme.colors.backgroundAlt};
  ${({ theme }) => theme.mediaQueries.md} {
    flex-grow: 0;
  }
`;

const ButtonMenu: React.FC<TabMenuProps> = ({ activeIndex = 0, onItemClick, children }) => {
  return (
    <Wrapper p={["0 4px", "0 16px"]}>
      <Inner>
        {Children.map(children, (child: ReactElement, index) => {
          const isActive = activeIndex === index;
          return cloneElement(child, {
            isActive,
            onClick: onItemClick ? () => onItemClick(index) : undefined,
            color: isActive ? "text" : "textSubtle",
          });
        })}
      </Inner>
    </Wrapper>
  );
};

export default ButtonMenu;
