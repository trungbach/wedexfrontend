import React from 'react'
import styled from "styled-components";


const ComingSoonWrapper = styled.div`
  text-align: center;
`

const StyledImage = styled.img`
  margin-top: 50px;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  max-width: 1090px;
  max-height: 570px;
`;

const ComingSoon = ({image}) => {
  return (
    <ComingSoonWrapper>
      <StyledImage src={`/images/${image}`}/>
    </ComingSoonWrapper>
  )
}

export default ComingSoon
