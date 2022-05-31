import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'wedex-uikit/src'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
        <img src="/images/loading.gif" width={170} height={170} alt=""/>
    </Wrapper>
  )
}

export default PageLoader
