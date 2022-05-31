import React, { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Input, Modal, ToastContainer } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import useForgotPassword from '../../../hooks/useForgotPassword'

interface ForgotPasswordModalProps {
  onDismiss?: () => void
  // onLogin: (email: string, password: string) => void
  // parentCallback: (loginCall: boolean) => void
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ onDismiss }) => {
  const { t } = useTranslation()
  const onForgotPassword = useForgotPassword
  const recaptchaRef = React.createRef()
  const [email, setEmail] = useState('')
  const [toasts, setToasts] = useState([])
  const [recaptcha, setRecaptcha] = useState('')

  const handleForgotPassword = async (_email: string, _recaptcha: string) => {
    const response = await onForgotPassword(_email, _recaptcha)

    let toast
    const now = Date.now()
    if (response.data.success) {
      toast = {
        id: `id-${now}`,
        title: response.data.message,
        type: 'success',
      }
      setTimeout(() => {
        // parentCallback(true)
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

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }
  const handleChangeEmail = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value)
    },
    [setEmail],
  )

  return (
    <Modal title={t('Forgot Password')} onDismiss={onDismiss}>
      <div style={{ marginBottom: '10px' }}>Email</div>
      <div style={{ marginBottom: '10px' }}><Input type='text' value={email} onChange={handleChangeEmail} /></div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey='6LfFOrQeAAAAAN13F9RyDrSMh_-AaBXvBFUJKEM5'
        onChange={setRecaptcha}
        style={{ marginBottom: '10px' }}
      />
      <Button style={{ marginBottom: '10px' }} onClick={async () => {
        await handleForgotPassword(email, recaptcha)
      }}>Request new password</Button>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Modal>
  )
}

export default ForgotPasswordModal