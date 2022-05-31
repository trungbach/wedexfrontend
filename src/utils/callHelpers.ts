import BigNumber from 'bignumber.js'
import { DEFAULT_TOKEN_DECIMAL } from 'config'
import { ethers } from 'ethers'
import { Pair, TokenAmount, Token } from '@pancakeswap-libs/sdk'
import { getLpContract, getMasterchefContract } from 'utils/contractHelpers'
import farms from 'config/constants/farms'
import { getAddress, getCakeAddress } from 'utils/addressHelpers'
import tokens from 'config/constants/tokens'
import { web3WithArchivedNodeProvider } from './web3'
import { getBalanceAmount } from './formatBalance'
import { BIG_TEN, BIG_ZERO } from './bigNumber'

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const stake = async (masterChefContract, pid, amount,ref,vipBranch,refLeaderCommission, account) => {
  return masterChefContract.methods
    .deposit(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(),ref,vipBranch,refLeaderCommission)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStake = async (sousChefContract, amount, decimals = 18, account) => {
  return sousChefContract.methods
    .deposit(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousStakeBnb = async (sousChefContract, amount, account) => {
  return sousChefContract.methods
    .deposit()
    .send({
      from: account,
      value: new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString(),
    })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .withdraw(pid, new BigNumber(amount).times(DEFAULT_TOKEN_DECIMAL).toString())
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
export const withdrawInvestment = async(masterChefContract, pid, account) => {
  return masterChefContract.methods
    .withdrawInvestment(pid)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
export const sousUnstake = async (sousChefContract, amount, decimals, account) => {
  return sousChefContract.methods
    .withdraw(new BigNumber(amount).times(BIG_TEN.pow(decimals)).toString())
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
export const withdrawV1 = async (pid,oldMasterChefContract, amount, account) => {
  return oldMasterChefContract.methods
    .withdraw(pid, amount)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const sousEmergencyUnstake = async (sousChefContract, account) => {
  return sousChefContract.methods
    .emergencyWithdraw()
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
export const emergencyUnstake = async (pid,masterChefContract, account) => {
  return masterChefContract.methods
    .emergencyWithdraw(pid)
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const harvest = async (masterChefContract, pid, account,ref,vipBranch,refLeaderCommission) => {
  return masterChefContract.methods
    .deposit(pid, '0',ref,vipBranch,refLeaderCommission)
    .send({ from: account})
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvest = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit('0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const soushHarvestBnb = async (sousChefContract, account) => {
  return sousChefContract.methods
    .deposit()
    .send({ from: account, value: BIG_ZERO })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const cakeBnbPid = 1
const cakeBnbFarm = farms.find((farm) => farm.pid === cakeBnbPid)

const CAKE_TOKEN = new Token(chainId, getCakeAddress(), 18)
const WBNB_TOKEN = new Token(chainId, tokens.wbnb.address[chainId], 18)
const CAKE_BNB_TOKEN = new Token(chainId, getAddress(cakeBnbFarm.lpAddresses), 18)

/**
 * Returns the total WEX staked in the WEX-BNB LP
 */
export const getUserStakeInCakeBnbLp = async (account: string, block?: number) => {
  try {
    const masterContract = getMasterchefContract(web3WithArchivedNodeProvider)
    const cakeBnbContract = getLpContract(getAddress(cakeBnbFarm.lpAddresses), web3WithArchivedNodeProvider)
    const totalSupplyLP = await cakeBnbContract.methods.totalSupply().call(undefined, block)
    const reservesLP = await cakeBnbContract.methods.getReserves().call(undefined, block)
    const cakeBnbBalance = await masterContract.methods.userInfo(cakeBnbPid, account).call(undefined, block)

    const pair: Pair = new Pair(
      new TokenAmount(CAKE_TOKEN, reservesLP._reserve0.toString()),
      new TokenAmount(WBNB_TOKEN, reservesLP._reserve1.toString()),
    )
    const cakeLPBalance = pair.getLiquidityValue(
      pair.token0,
      new TokenAmount(CAKE_BNB_TOKEN, totalSupplyLP.toString()),
      new TokenAmount(CAKE_BNB_TOKEN, cakeBnbBalance.amount.toString()),
      false,
    )

    return new BigNumber(cakeLPBalance.toSignificant(18))
  } catch (error) {
    console.error(`WEX-BNB LP error: ${error}`)
    return BIG_ZERO
  }
}

/**
 * Gets the cake staked in the main pool
 */
export const getUserStakeInCakePool = async (account: string, block?: number) => {
  try {
    const masterContract = getMasterchefContract(web3WithArchivedNodeProvider)
    const response = await masterContract.methods.userInfo(0, account).call(undefined, block)

    return getBalanceAmount(new BigNumber(response.amount))
  } catch (error) {
    console.error('Error getting stake in WEX pool', error)
    return BIG_ZERO
  }
}

export const redeem = async(presaleContract,account,amount) => {
  return presaleContract.methods
    .buy(amount)
    .send(
      { from: account,gas: 300000})
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}
export const recordReferral = async(account, recordReferralContract,ref,vipBranch,leaderCommission) => {

  return recordReferralContract.methods
    .addReferral(ref,vipBranch,leaderCommission)
    .send(
      {from:account,gas: 200000})
    .on('transactionHash', (tx) => {
      return tx.transactionHash
      }
    )

}
