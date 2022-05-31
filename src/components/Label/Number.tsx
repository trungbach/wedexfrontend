import styled, { DefaultTheme } from "styled-components";
import {space, typography, layout, SpaceProps, TypographyProps, LayoutProps} from "styled-system";
import getThemeValue from "wedex-uikit/src/util/getThemeValue";

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}


interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

const Number = styled.div<TextProps>`
  background: ${getColor};
  border-radius: 50%;
  width: 36px;
  margin: 0 auto;
  color: ${({ theme }) => theme.card.background};
  margin-top: 15px;
  height: 36px;
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
  `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}
`;

Number.defaultProps = {
  color: "text",
  small: false,
  ellipsis: false,
};

export default Number;
