import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
// import { useGetStats } from 'hooks/api'
import { BigNumber } from 'bignumber.js'
import { useFarmFromPid, useFarms, useLpTokenPrice } from '../../../state/hooks'
import useTokenBalance, { useBurnedBalance } from '../../../hooks/useTokenBalance'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const farmsLP = useFarmFromPid(1)
  // const farmtvl = farmsLP.map((farm) => {
  //   if (!farm.lpTotalInQuoteToken) {
  //     return null
  //   }
  //   const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken)
  //   return totalLiquidity.toNumber()
  // }).reduce((a, b) => a + b, 0).toLocaleString('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //
  // })
  const farmtvl = (new BigNumber(farmsLP.tokenAmountTotal)
    .toNumber()*useLpTokenPrice(farmsLP.lpSymbol).toNumber()*10)
    .toLocaleString('en-US', {style: 'currency',currency: 'USD'});
  const { t } = useTranslation()

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="lg" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {farmsLP ? (
          <>
            <Heading scale="xl">{`${farmtvl}`}</Heading>
            <Text color="textSubtle">{t('Across all LPs and Syrup Pools')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
