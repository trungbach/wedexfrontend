import React, { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Input, Modal, ToastContainer, useModal } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import useLogin from '../../../hooks/useLogin'
import useWithdraw from '../../../hooks/useWithdraw'

interface WithdrawModalProps {
  onDismiss?: () => void
  onConfirm: (id: number) => void
  id: number
}

const CancelWithdrawModal: React.FC<WithdrawModalProps> = ({ onDismiss,onConfirm, id }) => {
  const { t } = useTranslation()

  return (
    <Modal title={t('Cancel your Withdrawal?')} onDismiss={onDismiss}>
      <div style={{ marginBottom: '10px' }}>Id: {id}</div>
      <Button style={{ marginBottom: '10px' }} onClick={async () => {
        await onConfirm(id)
      }}>Withdraw</Button>
    </Modal>
  )
}

export default CancelWithdrawModal