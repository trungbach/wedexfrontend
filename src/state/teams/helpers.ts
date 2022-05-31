import {
  getMasterchefContract,
  // getBunnyFactoryContract,
  // getMasterchefContract,
  getProfileContract,
  getReferralContract,
} from 'utils/contractHelpers'
import {TeamData, TeamState} from 'state/types'
// import BigNumber from 'bignumber.js'
// eslint-disable-next-line import/named
import { NUMBER_OF_REFERRALS_VISIBLE } from "../../config/constants/teams";
import {NftImages} from "../../config/constants/types";
import {transformProfileResponse} from "../profile/helpers";
import {getNft} from "../../utils/collectibles";
import { BIG_ZERO } from '../../utils/bigNumber'
import { fetchFarmUserStakedBalances } from '../farms/fetchFarmUser'
import { farmsConfig } from '../../config/constants'
import { getBalanceNumber } from '../../utils/formatBalance'

const referralContract = getReferralContract()
const profileContract = getProfileContract()
const masterChefContract = getMasterchefContract();
const profileApi = process.env.REACT_APP_API_PROFILE

export const getNftAvatar = async (address: string): Promise<NftImages> => {
  try {
    const profileResponse = await profileContract.methods.getUserProfile(address).call()
    const { tokenId, nftAddress, isActive } = transformProfileResponse(profileResponse)
    if (!isActive) {
      return null
    }

    const nft = await getNft(nftAddress, tokenId);
    if (nft) {
      return nft.images
    }
    return null
  } catch (error) {
    console.info(error)
    return null
  }
}

/**
 * Gets on-chain data and merges it with the existing static list of teams
 */
// eslint-disable-next-line import/prefer-default-export
export const getTeams = async (account): Promise<TeamState> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  try {
    const lpPrice = await masterChefContract.methods.getLPPrice(0).call()
    const response = await fetch(`${profileApi}/api/users/${account}`)
    const { username = '' } = await response.json()
    const teamAdds = await referralContract.methods.getTeam(account).call()
    const totalFund = await referralContract.methods.totalFund(account).call()
    const totalCommission = await referralContract.methods.totalReferralCommissions(account).call()
    const nftCommission = BIG_ZERO// await bunnyFactoryContract.methods.totalCommission(account).call()
    const avatar = await getNftAvatar(account)
    const {referrer,vipBranch} = await referralContract.methods.referrers(account).call()
    const isVip = await referralContract.methods.isVip(account).call()
    const refResponse = await fetch(`${profileApi}/api/users/${account}`)
    const { username:refUsername = '' } = await refResponse.json()
    const refAvatar = await getNftAvatar(referrer)
    const teamData = []
    for (let i = 0; i < teamAdds.length && i < NUMBER_OF_REFERRALS_VISIBLE; i++) {
      // eslint-disable-next-line no-await-in-loop
      const subResponse = await fetch(`${profileApi}/api/users/${teamAdds[i]}`)
      // eslint-disable-next-line no-await-in-loop
      const { username:memberName = '' } = await subResponse.json()
      // eslint-disable-next-line no-await-in-loop
      const nbSubTeams = await referralContract.methods.getTeam(teamAdds[i]).call()
      // eslint-disable-next-line no-await-in-loop
      const totalFundSubTeam = await referralContract.methods.totalFund(teamAdds[i]).call()
      // eslint-disable-next-line no-await-in-loop
      const leaderFund = await fetchFarmUserStakedBalances(teamAdds[i],farmsConfig)
      // eslint-disable-next-line no-await-in-loop
      const images = await getNftAvatar(teamAdds[i])
      teamData[i] = {
        name: avatar!==null?`${teamAdds[i]}${memberName}`:teamAdds[i],
        users: nbSubTeams.length,
        points: leaderFund.reduce((prev,next)=> {
          return prev*1 + next*1
        },0)*lpPrice/100,
        totalFundSubTeam,
        images
      }
      console.log(teamData[i]);
    }
    return {
      name: username,
      address: account,
      users: teamAdds.length,
      totalCommission,
      points: totalFund,
      referralAddresses: teamAdds,
      referralList: teamData,
      isVip,
      owner: {
        address: referrer,
        name: refUsername,
        avatar: refAvatar,
        vipBranch
      },
      avatar,
      nftCommission
    }
  } catch (error) {
    console.info(error)
    return null
  }
}

export const getMoreReferrals = async (accounts): Promise<Array<TeamData>> => {
  try {
    const referralsData = []
    const lpPrice = await masterChefContract.methods.getLPPrice(0).call()
    for (let i = 0; i < accounts.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const subResponse = await fetch(`${profileApi}/api/users/${accounts[i]}`)
      // eslint-disable-next-line no-await-in-loop
      const { username:memberName = '' } = await subResponse.json()
      // eslint-disable-next-line no-await-in-loop
      const nbSubTeams = await referralContract.methods.referralsCount(accounts[i]).call()
      // eslint-disable-next-line no-await-in-loop
      const totalFundSubTeam = await referralContract.methods.totalFund(accounts[i]).call()
      // eslint-disable-next-line no-await-in-loop
      const leaderFund = await fetchFarmUserStakedBalances(accounts[i],farmsConfig)
      // eslint-disable-next-line no-await-in-loop
      const images = await getNftAvatar(accounts[i])
      referralsData[i] = {
        name: images!==null?`${accounts[i]}${memberName}`:accounts[i],
        users: nbSubTeams.length,
        points: leaderFund.reduce((prev,next)=> {
          return prev*1 + next*1
        },0)*lpPrice/100,
        totalFundSubTeam,
        images
      }
    }
    return referralsData
  } catch (error) {
    return []
  }
}
