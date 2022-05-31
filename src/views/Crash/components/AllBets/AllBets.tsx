import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'wedex-uikit/src';
import { Switch } from 'antd';
import ClassicBetTable from './ClassicBetTable';

interface Props {
  name?: string;
}

const AllBets: React.FC<Props> = () => {

  const [isTrenball, setTrenball] = useState(false);

  const onChange = (checked: boolean) => {
    // eslint-disable-next-line no-console
    console.log(`switch to ${checked}`);
    setTrenball(checked);
  };

  return (
    <StyledAllBets>
      <StyledHeader>
        <Flex width="100%" justifyContent="space-between">
          <Title>All Bets</Title>
          <Flex alignItems="center">
            <span className='me-2'>Trenball</span>
            <StyledSwitch size='small' onChange={onChange} checked={isTrenball} />
          </Flex>
        </Flex>
      </StyledHeader>

      <StyledContent>
        <ClassicBetTable />
      </StyledContent>
    </StyledAllBets>
  );
}

const StyledAllBets = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  margin-left: 0.625rem;
  border-radius: 1.25rem;
  width: 40%;
  max-width: 542px;
  position: relative;
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -1.875rem;
  left: 0;
  right: 0;
  padding: 0 0.625rem;
  line-height: 1.25rem;
`

const Title = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

const StyledSwitch = styled(Switch)`
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.colors.primary};
    &:focus {
      box-shadow: none;
    }
  }
`

const StyledContent = styled.div`
  height: 100%;
  min-height: 37.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.375rem;
`

export default AllBets;