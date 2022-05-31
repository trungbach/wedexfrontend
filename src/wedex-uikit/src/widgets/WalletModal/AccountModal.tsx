import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/Button'
import Text from '../../components/Text/Text'
import LinkExternal from '../../components/Link/LinkExternal'
import Flex from '../../components/Box/Flex'
import { Modal } from '../Modal'
import CopyToClipboard from './CopyToClipboard'
import { connectorLocalStorageKey } from './config'
import { registerToken } from '../../../../utils/wallet'

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const User = styled.div`
  display: inline-flex;
  width: 250px;
`

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) =>  (
  <Modal title='Your wallet' onDismiss={onDismiss}>
    <Text
      fontSize='20px'
      bold
      style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '8px' }}
    >
      {account}
    </Text>
    <Flex mb='32px'>
      <LinkExternal small href={`https://bscscan.com/address/${account}`} mr='16px'>
        View on BscScan
      </LinkExternal>
      <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
    </Flex>
    <Flex justifyContent='center'>
      <Button
        scale='sm'
        variant='secondary'
        onClick={() => registerToken('0x09bb6042a19bb3a6981e9a47ec0f006dbd28a8d1', 'DEX', 18, 'https://wedex.app/images/tokens/0x09bb6042a19bb3a6981e9a47ec0f006dbd28a8d1.svg')}
      >
        Add DEX Token
      </Button>
    </Flex>
    <hr />
    <Flex justifyContent='center'>
      <Button
        scale='sm'
        variant='secondary'
        onClick={() => registerToken('0x1921d10cb9365869341e46f687cf16209951b4f9', 'DEX-USDT LP', 18, 'https://wedex.app/images/tokens/0x09bb6042a19bb3a6981e9a47ec0f006dbd28a8d1.svg')}
      >
        Add DEX-USDT LP Token
      </Button>
    </Flex>
    <hr />
    <Flex justifyContent='center'>
      <Button
        scale='sm'
        variant='secondary'
        onClick={() => registerToken('0x55d398326f99059fF775485246999027B3197955', 'USDT', 18, 'https://wedex.app/images/tokens/0x55d398326f99059fF775485246999027B3197955.svg')}
      >
        Add USDT Token
      </Button>
    </Flex>
    <hr />
    <Flex justifyContent='center'>
      <Button
        scale='sm'
        variant='secondary'
        onClick={() => {
          logout()
          window.localStorage.removeItem(connectorLocalStorageKey)
          onDismiss()
        }}
      >
        Logout
      </Button>
    </Flex>
  </Modal>
)

export default AccountModal
