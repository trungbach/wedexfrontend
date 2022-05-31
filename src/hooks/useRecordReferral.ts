import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useRecordReferralContract } from './useContract'
import { recordReferral } from '../utils/callHelpers'
import useReferrer from './useReferer'


const useRecordReferral = () => {
  const { account } = useWeb3React()
  const recordReferralContract = useRecordReferralContract()
  const {ref,vipBranch,refLeaderCommission} = useReferrer();
  const handleJoin = useCallback(async () => {
    const txHash = await recordReferral(account, recordReferralContract,ref,vipBranch,refLeaderCommission)
    return txHash
  }, [account, recordReferralContract,ref,vipBranch,refLeaderCommission])

  return { onJoin: handleJoin }
}
export default useRecordReferral