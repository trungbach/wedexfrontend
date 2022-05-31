import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { getLotteryAddress, getpresaleAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { useUSDT } from './useContract'
import useRefresh from './useRefresh'

// Retrieve lottery allowance
export const useLotteryAllowance = () => {
  const [allowance, setAllowance] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const cakeContract = useUSDT()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await cakeContract.methods.allowance(account, getLotteryAddress()).call()
      setAllowance(new BigNumber(res))
    }

    if (account) {
      fetchAllowance()
    }
  }, [account, cakeContract, fastRefresh])

  return allowance
}

// Retrieve IFO allowance
export const useIfoAllowance = (tokenContract: Contract, spenderAddress: string, dependency?: any): BigNumber => {
  const { account } = useWeb3React()
  const [allowance, setAllowance] = useState(BIG_ZERO)
  const slowRefresh = useRefresh()
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods.allowance(account, spenderAddress).call()
        setAllowance(new BigNumber(res))
      } catch (e) {
        console.error(e)
      }
    }

    if (account) {
      fetch()
    }
  }, [account, spenderAddress, tokenContract, dependency,slowRefresh])

  return allowance
}

// Retrieve lottery allowance
export const useRedeemAllowance = () => {
  const [allowance, setAllowance] = useState(BIG_ZERO)
  const { account } = useWeb3React()
  const usdtContract = useUSDT()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchAllowance = async () => {
      const res = await usdtContract.methods.allowance(account, getpresaleAddress()).call()
      setAllowance(new BigNumber(res))
    }

    if (account) {
      fetchAllowance()
    }
  }, [account, usdtContract, fastRefresh])

  return allowance
}
