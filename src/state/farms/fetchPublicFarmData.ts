import BigNumber from 'bignumber.js'
import masterchefABI from 'config/abi/masterchef.json'
import oldMasterchefABI from 'config/abi/oldmasterchef.json'
import erc20 from 'config/abi/erc20.json'
import {
  getAddress,
  getMasterChefAddress,
  getOldMasterChefAddress,
  getV2MasterChefAddress,
  getV3MasterChefAddress,
} from 'utils/addressHelpers'
import { BIG_TEN, BIG_ZERO } from 'utils/bigNumber'
import multicall from 'utils/multicall'
import { Farm } from '../types'

// type PublicFarmData = {
//   tokenAmountMc: SerializedBigNumber
//   quoteTokenAmountMc: SerializedBigNumber
//   tokenAmountTotal: SerializedBigNumber
//   quoteTokenAmountTotal: SerializedBigNumber
//   lpTotalInQuoteToken: SerializedBigNumber
//   lpTotalSupply: SerializedBigNumber
//   tokenPriceVsQuote: SerializedBigNumber
//   poolWeight: SerializedBigNumber
//   lockingPeriod: SerializedBigNumber
// }

const fetchFarm = async (farm: Farm): Promise<{ lpTotalSupply: string; poolWeight: string; lockingPeriod: number; fixedApr: number; totalAmount: number;   tokenAmountTotal: string; tokenAmountMc: string; quoteTokenAmountMc: string; quoteTokenAmountTotal: string; tokenPriceVsQuote: string; lpTotalInQuoteToken: string; }> => {
  const { pid,lpAddresses, token, quoteToken,oldpid } = farm
  const lpAddress = getAddress(lpAddresses)
  if(pid>1) {
    const calls = [
      // Balance of token in the LP contract
      {
        address: getAddress(token.address),
        name: 'balanceOf',
        params: [lpAddress],
      },
      // Balance of quote token on LP contract
      {
        address: getAddress(quoteToken.address),
        name: 'balanceOf',
        params: [lpAddress],
      },
      // Balance of LP tokens in the master chef contract
      {
        address: lpAddress,
        name: 'balanceOf',
        params: [getOldMasterChefAddress()],
      },
      // Total supply of LP tokens
      {
        address: lpAddress,
        name: 'totalSupply',
      },
      // Token decimals
      {
        address: getAddress(token.address),
        name: 'decimals',
      },
      // Quote token decimals
      {
        address: getAddress(quoteToken.address),
        name: 'decimals',
      },
    ]

    const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
      await multicall(erc20, calls)

    // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
    const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
    // Raw amount of token in the LP, including those not staked
    const tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
    const quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))
    // Amount of token in the LP that are staked in the MC (i.e amount of token * lp ratio)
    const tokenAmountMc = tokenAmountTotal.times(lpTokenRatio)
    const quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)

    // Total staked in LP, in quote token value
    const lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2))
    // Only make masterchef calls if farm has pid
    const [info] =
      oldpid || oldpid === 0
        ? await multicall(masterchefABI, [
          {
            address: getOldMasterChefAddress(),
            name: 'poolInfo',
            params: [oldpid],
          }
        ])
        : [null, null]
    console.log("poolinfo",oldpid, info)
    const lockingPeriod = info ? new BigNumber(info.lockingPeriod?._hex) : BIG_ZERO
    // const fixedApr = info ? new BigNumber(info.fixedApr?._hex) : BIG_ZERO
    const totalAmount = info ? new BigNumber(info.totalAmount?._hex) : BIG_ZERO
    return {
      tokenAmountMc: tokenAmountMc.toJSON(),
      quoteTokenAmountMc: quoteTokenAmountMc.toJSON(),
      tokenAmountTotal: tokenAmountTotal.toJSON(),
      quoteTokenAmountTotal: quoteTokenAmountTotal.toJSON(),
      lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
      lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
      tokenPriceVsQuote: (quoteTokenAmountTotal.div(tokenAmountTotal)).toJSON(),
      poolWeight: "10",
      lockingPeriod: lockingPeriod.toNumber(),
      fixedApr: 0.0000001,
      totalAmount: new BigNumber(lpTokenBalanceMC).div(1e18).toNumber()
    }
  }
  const calls = [
    // Balance of token in the LP contract
    {
      address: getAddress(token.address),
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: getAddress(quoteToken.address),
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: lpAddress,
      name: 'balanceOf',
      params: [getMasterChefAddress()],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
    // Token decimals
    {
      address: getAddress(token.address),
      name: 'decimals',
    },
    // Quote token decimals
    {
      address: getAddress(quoteToken.address),
      name: 'decimals',
    },
  ]

  const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
    await multicall(erc20, calls)

  // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
  const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))
  // Raw amount of token in the LP, including those not staked
  const tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
  const quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))
  // Amount of token in the LP that are staked in the MC (i.e amount of token * lp ratio)
  const tokenAmountMc = tokenAmountTotal.times(lpTokenRatio)
  const quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)

  // Total staked in LP, in quote token value
  const lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2))
  // Only make masterchef calls if farm has pid
  const [info] =
    pid || pid === 0
      ? await multicall(masterchefABI, [
        {
          // eslint-disable-next-line no-nested-ternary
          address: pid>1?getOldMasterChefAddress():getMasterChefAddress(),
          name: 'poolInfo',
          params: [(pid>1)?oldpid:pid],
        }
      ])
      : [null, null]

  const lockingPeriod = info ? new BigNumber(info.lockingPeriod?._hex) : BIG_ZERO
  const fixedApr = info ? new BigNumber(info.fixedApr?._hex) : BIG_ZERO
  const totalAmount = info ? new BigNumber(info.totalAmount?._hex) : BIG_ZERO
  return {
    tokenAmountMc: tokenAmountMc.toJSON(),
    quoteTokenAmountMc: quoteTokenAmountMc.toJSON(),
    tokenAmountTotal: tokenAmountTotal.toJSON(),
    quoteTokenAmountTotal: quoteTokenAmountTotal.toJSON(),
    lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
    lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
    tokenPriceVsQuote: (quoteTokenAmountTotal.div(tokenAmountTotal)).toJSON(),
    poolWeight: "10",
    lockingPeriod: lockingPeriod.toNumber(),
    fixedApr: fixedApr.toNumber(),
    totalAmount: totalAmount.div(1e18).toNumber()
  }
}

export default fetchFarm
