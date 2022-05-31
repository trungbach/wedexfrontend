import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { usePresale } from './useContract'
import { redeem } from '../utils/callHelpers'
import { DEFAULT_TOKEN_DECIMAL } from '../config'


const useRedeem = () => {
  const { account } = useWeb3React()
  const preSaleContract = usePresale()
  const handleRedeem = useCallback(async (amount) => {
    const txHash = await redeem(preSaleContract, account,new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
    return txHash
  }, [account, preSaleContract])

  return { onBuy: handleRedeem }
}
export default useRedeem