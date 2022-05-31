import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserBalance, updateUserPendingReward } from 'state/actions'
import { soushHarvest, soushHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, useOldMasterchef, useSousChef } from './useContract'
import useReferer from './useReferer'

export const useHarvest = (farmPid: number) => {
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const oldMasterChefContract = useOldMasterchef();
  const { ref,vipBranch,refLeaderCommission } = useReferer()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(farmPid>1?oldMasterChefContract:masterChefContract, farmPid>1?farmPid-2:farmPid, account,ref,vipBranch,refLeaderCommission)
    return txHash
  }, [account, farmPid, masterChefContract,ref,vipBranch,refLeaderCommission,oldMasterChefContract])

  return { onReward: handleHarvest }
}

export const useSousHarvest = (sousId, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const sousChefContract = useSousChef(sousId)
  const masterChefContract = useMasterchef()
  const { ref,vipBranch,refLeaderCommission } = useReferer()
  const handleHarvest = useCallback(async () => {
    if (sousId === 0) {
      await harvest(masterChefContract, 0, account,ref,vipBranch,refLeaderCommission)
    } else if (isUsingBnb) {
      await soushHarvestBnb(sousChefContract, account)
    } else {
      await soushHarvest(sousChefContract, account)
    }
    dispatch(updateUserPendingReward(sousId, account))
    dispatch(updateUserBalance(sousId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, sousChefContract, sousId,ref,vipBranch,refLeaderCommission])

  return { onReward: handleHarvest }
}
