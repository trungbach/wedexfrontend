import { Profile } from 'state/types'

export type ProfileResponse = {
  0: string
  1: string
  2: string
  3: boolean
}

export const transformProfileResponse = (profileResponse: ProfileResponse): Partial<Profile> => {
  const { 0: userId, 1: nftAddress, 2: tokenId, 3: isActive } = profileResponse

  return {
    userId: Number(userId),
    tokenId: Number(tokenId),
    nftAddress,
    isActive,
  }
}
