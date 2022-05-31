import React from 'react'
import { TokenPairImage, ImageProps } from 'wedex-uikit/src'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  return (
    <TokenPairImage
      primaryTokenAddress={getAddress(tokens.wex.address)}
      secondaryTokenAddress="autorenew"
      secondaryImageProps={{
        imageFormat: 'svg',
      }}
      {...props}
    />
  )
}

export default CakeVaultTokenPairImage
