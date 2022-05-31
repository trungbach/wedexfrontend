import styled from "styled-components";
import { Input } from "wedex-uikit/src";

// eslint-disable-next-line import/prefer-default-export
export const GameWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  padding: 1.25rem 0.625rem;
  background-color: ${({ theme }) => theme.colors.background};
`

export const GameArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GameMain = styled.div`
  min-height: 47.5rem;
  position: relative;
  border-radius: 1.25rem;
  background-color:   ${({ theme }) => theme.colors.backgroundAlt};
  display: flex;
  // flex-direction: column;
  flex: 1;
  overflow: hidden;
`

export const GameInput = styled(Input)`
   background-color: ${({ theme }) => theme.colors.backgroundAlt};
   &:focus {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.colors.primary} , 0px 0px 0px 1px ${({ theme }) => theme.colors.primary} !important;
  }
`