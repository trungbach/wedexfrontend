import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, sousStake, sousStakeBnb } from 'utils/callHelpers'
import { useMasterchef, useOldMasterchef, useSousChef } from './useContract'
import useReferrer from './useReferer'

const useStake = (pid: number,ref: string) => {
  const { account } = useWeb3React()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const masterChefContract = pid===69?useOldMasterchef():useMasterchef()
  const {vipBranch,refLeaderCommission} = useReferrer()
  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount,ref,vipBranch,refLeaderCommission,account)
      console.info(txHash)
    },
    [account, masterChefContract, pid,ref,vipBranch,refLeaderCommission],
  )

  return { onStake: handleStake }
}

export const useSousStake = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)
  const {vipBranch,refLeaderCommission} = useReferrer()
  const handleStake = useCallback(
    async (amount: string, decimals: number,ref: string) => {
      if (sousId === 0) {
        await stake(masterChefContract, 0, amount,ref,vipBranch,refLeaderCommission,account)
      } else if (isUsingBnb) {
        await sousStakeBnb(sousChefContract, amount, account)
      } else {
        await sousStake(sousChefContract, amount, decimals, account)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId,vipBranch,refLeaderCommission],
  )

  return { onStake: handleStake }
}

export default useStake
