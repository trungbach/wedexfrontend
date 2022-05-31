import React, { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Input, Modal, ToastContainer, useModal } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import useLogin from '../../../hooks/useLogin'
import ForgotPasswordModal from './ForgotPasswordModal'
import useWithdraw from '../../../hooks/useWithdraw'

interface WithdrawModalProps {
  onDismiss?: () => void
  // onLogin: (email: string, password: string) => void
  parentCallback: (loginCall: boolean) => void
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onDismiss, parentCallback }) => {
  const { t } = useTranslation()
  const onWithdraw = useWithdraw
  const recaptchaRef = React.createRef()
  const handleWithdraw = async (amount: number, recaptcha: string) => {
    const response = await onWithdraw(amount*100, recaptcha)

    let toast
    const now = Date.now()
    if (response.data.success) {
      toast = {
        id: `id-${now}`,
        title: response.data.message,
        type: 'success',
      }
      setTimeout(() => {
        parentCallback(true)
        onDismiss()
      }, 1000)
    } else if (response.data !== undefined) {
      toast = {
        id: `id-${now}`,
        title: response.data.message,
        type: 'danger',
      }
      // @ts-ignore
      recaptchaRef.current.props.grecaptcha.reset()
    }
    setToasts((prevToasts) => [toast, ...prevToasts])
  }

  const [amount, setAmount] = useState(0)
  const [toasts, setToasts] = useState([])
  const [recaptcha, setRecaptcha] = useState('')

  const handleChangeAmount = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setAmount(parseFloat(e.currentTarget.value))
    },
    [setAmount],
  )

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }

  return (
    <Modal title={t('Withdraw DEX')} onDismiss={onDismiss}>
      <div style={{ marginBottom: '10px' }}>Amount</div>
      <div style={{ marginBottom: '10px' }}><Input type='number' value={amount} onChange={handleChangeAmount} /></div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey='6LfFOrQeAAAAAN13F9RyDrSMh_-AaBXvBFUJKEM5'
        onChange={setRecaptcha}
        style={{ marginBottom: '10px' }}
      />
      <Button style={{ marginBottom: '10px' }} onClick={async () => {
        await handleWithdraw(amount, recaptcha)
      }}>Withdraw</Button>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Modal>
  )
}

export default WithdrawModal