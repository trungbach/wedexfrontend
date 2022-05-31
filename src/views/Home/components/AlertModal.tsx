import React, { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Input, Modal, Text, useModal } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

interface LoginModalProps {
  onDismiss?: () => void
}
const StyledModal = styled(Modal)`
  max-width: 600px;
`
const AlertModal: React.FC<LoginModalProps> = ({ onDismiss }) => {
  const { t } = useTranslation()


  return (
    <StyledModal title={t('Wedex Airdrop Version 1 Ended')} onDismiss={onDismiss}>
      <Text mb="10px">✅The demand of Wedex Airdrop reward is so great, Wedex created a wave that spread around the world. We helped a lot of people during downtrend.📛</Text>

      <Text mb="10px">⚠️But there are many users violated our terms to gain illicit profits. We would like to inform you that Wedex airdrop version 1 will end on: May 21, 2022. Wedex and game version 2 are coming soon.♻️</Text>

      <Text mb="10px">♨️In the mean time waiting for our new game version 2, please refer our Policy at https://wedex.app/profile. Wedex has a lot of program to get free DEX in the upcoming time.✳️</Text>

     <Text mb="10px">🎯Please stay tuned!</Text>
    </StyledModal>
  )
}

export default AlertModal