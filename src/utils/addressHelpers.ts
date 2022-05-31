import { TESTNET_CHAIN_ID } from 'config'
import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[TESTNET_CHAIN_ID]
}

export const getCakeAddress = () => {
  return getAddress(tokens.wex.address)
}
export const getUsdtAdress = () => {
  return getAddress(tokens.usdt.address)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getOldMasterChefAddress = () => {
  return getAddress(addresses.oldMasterChef)
}
export const getV2MasterChefAddress = () => {
  return getAddress(addresses.v2masterChef)
}
export const getV3MasterChefAddress = () => {
  return getAddress(addresses.v3masterChef)
}
export const getpresaleAddress = () => {
  return getAddress(addresses.presale)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
export const getLotteryAddress = () => {
  return getAddress(addresses.lottery)
}
export const getLotteryTicketAddress = () => {
  return getAddress(addresses.lotteryNFT)
}
export const getLotteryV2Address = () => {
  return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getWexReferralAddress = () => {
  return getAddress(addresses.wexReferral)
}
export const getWexNftAddress = () => {
  return getAddress(addresses.wexNft)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getRecordReferralAdress = () => {
  return getAddress(addresses.wexRecordReferral)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
export const getEasterNftAddress = () => {
  return getAddress(addresses.easterNft)
}
export const getCakeVaultAddress = () => {
  return getAddress(addresses.cakeVault)
}
export const getPredictionsAddress = () => {
  return getAddress(addresses.predictions)
}
export const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}
