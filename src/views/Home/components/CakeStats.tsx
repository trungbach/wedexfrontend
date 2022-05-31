import React from 'react'
import { Card, CardBody, Heading, Text } from 'wedex-uikit/src'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress, getpresaleAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  padding: 5px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress(),'0x000000000000000000000000000000000000dEaD'))
  const presaleBalance = getBalanceNumber(useBurnedBalance(getCakeAddress(),getpresaleAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading scale="xl" mb="20px">
          {t('DEX Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total DEX Supply')}</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total DEX Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Presale DEX')}</Text>
          <CardValue fontSize="14px" decimals={0} value={presaleBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New DEX/block')}</Text>
          <Text fontSize="14px" fontWeight="bold">~ 10% TVL</Text>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
