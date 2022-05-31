import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import oldMasterchefABI from 'config/abi/oldmasterchef.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import {
  getAddress,
  getMasterChefAddress,
  getOldMasterChefAddress,
  getV2MasterChefAddress,
  getV3MasterChefAddress,
} from 'utils/addressHelpers'
import { FarmConfig } from 'config/constants/types'

export const fetchFarmUserAllowances = async (account: string, farmsToFetch: FarmConfig[]) => {
  const masterChefAddress = getMasterChefAddress()
  const oldMasterChefAddress = getOldMasterChefAddress()
  // const v2MasterChefAddress = getV2MasterChefAddress()
  const v3MasterChefAddress = getV3MasterChefAddress()
  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    // eslint-disable-next-line no-nested-ternary
    return { address: lpContractAddress, name: 'allowance', params: [account, {0: masterChefAddress, 1: masterChefAddress, 2: oldMasterChefAddress, 3: oldMasterChefAddress}[farm.pid]] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)

  return rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()})
}

export const fetchFarmUserTokenBalances = async (account: string, farmsToFetch: FarmConfig[]) => {
  const calls = farmsToFetch.map((farm) => {
    const lpContractAddress = getAddress(farm.lpAddresses)
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  console.log(rawTokenBalances,"rawLpAllowances")
  return rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()})
}

export const fetchFarmUserStakedBalances = async (account: string, farmsToFetch: FarmConfig[]) => {
  const masterChefAddress = getMasterChefAddress()
  const oldMasterChefAddress = getOldMasterChefAddress()
  const v2MasterChefAddress = getV2MasterChefAddress()
  const v3MasterChefAddress = getV3MasterChefAddress()
  const oldMasterChefCalls = farmsToFetch.filter((farm)=> farm.pid === 2|| farm.pid===3).map((farm) => {
    const pid = farm.oldpid
    return {
      address: oldMasterChefAddress,
      name: 'userInfo',
      params: [pid, account],
    }
  })

  const newMasterChefCalls = farmsToFetch.filter((farm)=> farm.pid<2).map((farm) => {
    const pid = farm.pid
    return {
      address: masterChefAddress,
      name: 'userInfo',
      params: [pid, account],
    }
  })
  const v2MasterChefCalls = farmsToFetch.filter((farm)=> farm.pid === 96).map((farm) => {
    const pid = 1
    return {
      address: v2MasterChefAddress,
      name: 'userInfo',
      params: [pid, account],
    }
  })
  const v3MasterChefCalls = farmsToFetch.filter((farm)=> farm.pid === 56).map((farm) => {
    const pid = 1
    return {
      address: v3MasterChefAddress,
      name: 'userInfo',
      params: [pid, account],
    }
  })

  const oldMasterChefRawStakedBalances = await multicall(oldMasterchefABI, oldMasterChefCalls)
  const newMasterChefRawStakedBalances = await multicall(masterchefABI, newMasterChefCalls)
  const v2MasterChefRawStakedBalances = await multicall(masterchefABI, v2MasterChefCalls)
  const v3MasterChefRawStakedBalances = await multicall(masterchefABI, v3MasterChefCalls)
  const parsedStakedBalances = oldMasterChefRawStakedBalances.concat(v2MasterChefRawStakedBalances).concat(v3MasterChefRawStakedBalances).concat(newMasterChefRawStakedBalances).map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  console.log(parsedStakedBalances,"parsedStakedBalances")
  // console.log("parsedStakedBalances",parsedStakedBalances)
  return parsedStakedBalances
}
export const fetchFarmUserEarnings = async (account: string, farmsToFetch: FarmConfig[]) => {
  const masterChefAddress = getMasterChefAddress()
  const oldMasterChessAddress = getOldMasterChefAddress()
  const v2MasterChefAddress = getV2MasterChefAddress()
  const v3MasterChefAddress = getV3MasterChefAddress()
  const oldMasterChefCalls = farmsToFetch.filter((farm)=> farm.pid === 2||farm.pid===3).map((farm) => {
    const pid = farm.oldpid
    return {
      address: oldMasterChessAddress,
      name: 'pendingWedex',
      params: [pid, account],
    }
  })
  const v2MasterChefCalls = farmsToFetch.filter((farm)=> farm.pid === 96).map((farm) => {
    const pid = 1;
    return {
      address: v2MasterChefAddress,
      name: 'pendingWedex',
      params: [pid, account],
    }
  })
  const v3MasterChefCalls = farmsToFetch.filter((farm)=> farm.pid === 56).map((farm) => {
    const pid = 1;
    return {
      address: v3MasterChefAddress,
      name: 'pendingWedex',
      params: [pid, account],
    }
  })

  const newMasterChefCalls = farmsToFetch.filter((farm)=> farm.pid<2).map((farm) => {
    const pid = farm.pid
    return {
      address: masterChefAddress,
      name: 'pendingWedex',
      params: [pid, account],
    }
  })

  const oldMasterChefRawEarnings = await multicall(oldMasterchefABI, oldMasterChefCalls)
  const newMasterChefRawEarnings = await multicall(masterchefABI, newMasterChefCalls)
  const v2MasterChefRawEarnings = await multicall(masterchefABI, v2MasterChefCalls)
  const v3MasterChefRawEarnings = await multicall(masterchefABI, v3MasterChefCalls)
  const parsedEarnings = oldMasterChefRawEarnings.concat(v2MasterChefRawEarnings).concat(v3MasterChefRawEarnings).concat(newMasterChefRawEarnings).map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
export const fetchFarmFreeInvestmentAmount = async (account: string,  farmsToFetch: FarmConfig[]) => {
  const masterChefAddress = getMasterChefAddress();
  const calls = farmsToFetch.map((farm) => {
    return {
      address: masterChefAddress,
      name: 'getFreeInvestmentAmount',
      params: [farm.pid,account],
    }
  })

  const rawFreeInvestmentAmount = await multicall(masterchefABI, calls)
  const parsedFreeInvestmentAmount = rawFreeInvestmentAmount.map((freeInvestmentAmount) =>{
    return new BigNumber(freeInvestmentAmount).toJSON()
  })
  return parsedFreeInvestmentAmount
}
