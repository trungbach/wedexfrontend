import React from 'react'
import { Text } from 'wedex-uikit/src'
import { useWeb3React } from '@web3-react/core'
// import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { useFarms, useFarmUser, useLpTokenPrice } from 'state/hooks'
// import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'
import { getBalanceNumber } from '../../../utils/formatBalance'

// const Block = styled.div`
//   margin-bottom: 24px;
// `

const LpStakingBalance = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { data: farmsLP } = useFarms()
  const lpPrice = useLpTokenPrice(farmsLP[1].lpSymbol)
  let stakedBalance = 0;
  farmsLP.map(farm =>  {
    // @ts-ignore
    // eslint-disable-next-line react-hooks/rules-of-hooks
    stakedBalance +=  getBalanceNumber(new BigNumber(farm.userData.stakedBalance));
    return 0;
  });
  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <CardValue value={stakedBalance} decimals={2} fontSize="24px" lineHeight="36px" />
      <CardBusdValue value={stakedBalance*lpPrice.toNumber()} />
    </>
  )
}

export default LpStakingBalance
