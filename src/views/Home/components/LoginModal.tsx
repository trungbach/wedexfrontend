import React, { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Input, Modal, ToastContainer, useModal } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import useLogin from '../../../hooks/useLogin'
import ForgotPasswordModal from './ForgotPasswordModal'

interface LoginModalProps {
  onDismiss?: () => void
  // onLogin: (email: string, password: string) => void
  parentCallback: (loginCall: boolean) => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onDismiss, parentCallback }) => {
  const { t } = useTranslation()
  const onLogin = useLogin
  const recaptchaRef = React.createRef()
  const [showForgotPasswordModal] = useModal(<ForgotPasswordModal />)
  const handleLogin = async (email: string, password: string, recaptcha: string) => {
    const response = await onLogin(email, password, recaptcha)

    let toast
    const now = Date.now()
    if (response.data.success) {
      toast = {
        id: `id-${now}`,
        title: `Login successfully!`,
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toasts, setToasts] = useState([])
  const [recaptcha, setRecaptcha] = useState('')

  const handleChangeEmail = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value)
    },
    [setEmail],
  )
  const handleChangePassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setPassword(e.currentTarget.value)
    },
    [setPassword],
  )

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }

  return (
    <Modal title={t('Login')} onDismiss={onDismiss}>
      <div style={{ marginBottom: '10px' }}>Email</div>
      <div style={{ marginBottom: '10px' }}><Input type='text' value={email} onChange={handleChangeEmail} /></div>
      <div style={{ marginBottom: '10px' }}>Password</div>
      <div style={{ marginBottom: '16px' }}><Input type='password' value={password}
                                                   onChange={handleChangePassword} /></div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey='6LfFOrQeAAAAAN13F9RyDrSMh_-AaBXvBFUJKEM5'
        onChange={setRecaptcha}
        style={{ marginBottom: '10px' }}
      />
      <Button style={{ marginBottom: '10px' }} onClick={async () => {
        await handleLogin(email, password, recaptcha)
      }}>Login</Button>
      <Button variant='text' onClick={() => {
        onDismiss()
        showForgotPasswordModal()
      }}>Forgot password?</Button>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Modal>
  )
}

export default LoginModal