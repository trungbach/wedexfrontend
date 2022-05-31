import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'wedex-uikit/src/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textSubtle};
    img {
      height: auto;
      max-width: 100%;
    }
  }
  .minesDropdown{
    .ant-select-item-option{
      border-color: #fff;
      padding: 0 0.625rem;
      border: 1px solid transparent;
      background-color: transparent;
      border-radius: 1.0625rem;
      color: rgba(153,164,176,.6);
      margin: 0.25rem 0;
      white-space: nowrap;
      display:flex;
      align-items:center;
    }
    .ant-select-item-option-selected{
      border-color: rgba(91,174,28,.4)
    }
    .ant-select-item-option-selected:after{
      content: "";
      position: absolute;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.25rem;
      top: 50%;
      margin-top: -0.25rem;
      right: 0.625rem;
      background-color: #43B309;
      box-shadow: 0 0 0 0.3125rem rgb(91 174 28 / 15%)
    }
    .ant-select-item-option-active:hover{
      background-color: rgba(45,48,53,.4)
    }
  }
`

export default GlobalStyle
