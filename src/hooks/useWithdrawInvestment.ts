import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import { useMasterchef } from './useContract'
import { withdrawInvestment } from '../utils/callHelpers'

const useWithdrawInvestment = (pid: number) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()

  const handleWithdrawInvestment = useCallback(
    async () => {
      const txHash = await withdrawInvestment(masterChefContract, pid, account)
      console.info(txHash)
    },
    [account, masterChefContract, pid],
  )

  return { onWithdrawInvestment: handleWithdrawInvestment }
}
export default useWithdrawInvestment