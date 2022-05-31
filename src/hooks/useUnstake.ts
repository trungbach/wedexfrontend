import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { unstake, sousUnstake, sousEmergencyUnstake, withdrawV1, emergencyUnstake } from 'utils/callHelpers'
// import BigNumber from 'bignumber.js'
import { useMasterchef, useOldMasterchef, useSousChef, useV2Masterchef, useV3Masterchef } from './useContract'

const useUnstake = (pid: number, ref: string) => {
  const { account } = useWeb3React()


  // eslint-disable-next-line react-hooks/rules-of-hooks
  let masterChefContract = pid===69?useOldMasterchef():useMasterchef()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  masterChefContract = pid===96?useV2Masterchef():masterChefContract;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  masterChefContract = pid===56?useV3Masterchef():masterChefContract;


  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, (pid===69||pid===96||pid===56)?1:pid, amount, account)
      console.info(txHash)
    },
    [account, masterChefContract, pid],
  )

  return { onUnstake: handleUnstake }
}

export const useSousUnstake = (sousId, enableEmergencyWithdraw = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef()
  const sousChefContract = useSousChef(sousId)

  const handleUnstake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 0) {
        const txHash = await unstake(masterChefContract, 0, amount, account)
        console.info(txHash)
      } else if (enableEmergencyWithdraw) {
        const txHash = await sousEmergencyUnstake(sousChefContract, account)
        console.info(txHash)
      } else {
        const txHash = await sousUnstake(sousChefContract, amount, decimals, account)
        console.info(txHash)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
      dispatch(updateUserPendingReward(sousId, account))
    },
    [account, dispatch, enableEmergencyWithdraw, masterChefContract, sousChefContract, sousId],
  )

  return { onUnstake: handleUnstake }
}
export const useEmergencyWithdraw = (pid:number) => {
  const { account } = useWeb3React()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const masterChefContract = pid>1?useOldMasterchef():useMasterchef()
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // masterChefContract = pid===96?useV2Masterchef():masterChefContract;
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // masterChefContract = pid===56?useV3Masterchef():masterChefContract;

  const realPid = [2,3].indexOf(pid) === -1 ? pid : pid-2;

  const handleUnstake = useCallback(
    async () => {
      // console.log("emergency withdraw", realPid,masterChefContract, account);
      const txHash = await emergencyUnstake(realPid,masterChefContract, account)
      console.info(txHash)
    },
    [account, masterChefContract,realPid],
  )

  return { onEmergency: handleUnstake }
}

export default useUnstake
