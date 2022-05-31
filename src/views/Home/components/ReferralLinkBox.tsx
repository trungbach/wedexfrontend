import React from 'react';
import styled, {useTheme} from 'styled-components';
import { Box, Text } from 'wedex-uikit/src';
import CopyToClipboard from 'wedex-uikit/src/widgets/WalletModal/CopyToClipboard';

interface ReferralLinkBoxProps {
  link: string;
}

const StyledCopyToClipboard = styled(CopyToClipboard)`
  background: ${({theme}) => theme.colors.primary};
  color: white;
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: -1px;
  right: -1px;
  height: 100%;
  padding: 0 8px;
  border: solid 1px;
  border-color: ${({theme}) => theme.colors.primary};
  border-radius: 0 32px 32px 0;
  font-weight: normal;
  box-sizing: content-box;
  svg {
    display: none;
  }
  img {
    margin-right: 12px;
  }
  ${({theme}) => theme.mediaQueries.sm} {
    padding: 0 16px;
  }
`;

const StyledLink = styled(Text)`
  font-size: 12px;
  ${({theme}) => theme.mediaQueries.sm} {
    font-size: 14px;
  }
  overflow-x: hidden;
`;

const ReferralLinkBox: React.FC<ReferralLinkBoxProps> = ({link}) => {
  const theme = useTheme()
  return (
    <Box borderRadius="32px" border="solid 1px" borderColor="inputSecondary" borderRight="none"  background={theme.nav.background}
      position="relative"
      paddingTop={[1, 1, 2]}
      paddingBottom={[1, 1, 2]}
      paddingRight={['120px', '150px']}
      paddingLeft={[3, 3, 4]}>
      <StyledLink>{link}</StyledLink>
      <StyledCopyToClipboard toCopy={link}>
        <img src="/images/profile/copy-link.svg" alt="copy-link" />
        Copy link</StyledCopyToClipboard>
    </Box>
  )
}

export default ReferralLinkBox;