import styled from "styled-components";
import { color } from "styled-system";
import { TabProps } from "./types";

const getPadding = ({ scale }: TabProps) => (scale === "md" ? "8px" : "16px");

const Tab = styled.button<TabProps>`
  width: 5.625rem;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  padding: ${getPadding};
  font-weight: ${props => props.isActive ? 700 : 400};
  background-image: ${props => props.isActive ? "linear-gradient(to left,#555966,#555966,#58ae14)" : ({ theme }) => theme.colors.backgroundAlt};
  background-color: transparent;
  &:hover {
    color:  ${({ theme }) => theme.colors.text};
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-grow: 0;
  }

  ${color}
`;

Tab.defaultProps = {
  scale: "md",
};

export default Tab;
