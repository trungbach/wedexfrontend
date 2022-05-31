import React, { useCallback, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Input, Modal, ToastContainer } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import useRegisrer from '../../../hooks/useRegister'
import useWeb3 from '../../../hooks/useWeb3'

interface RegisterModalProps {
  onDismiss?: () => void
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onDismiss }) => {
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [wallet, setWallet] = useState('')
  const [sign, setSign] = useState('')
  const [recaptcha, setRecaptcha] = useState('')
  const [nonce, setNonce] = useState(Math.floor(Date.now() / 1000))
  const recaptchaRef = React.createRef()

  const [toasts, setToasts] = useState([])

  const onRegister = useRegisrer


  const handleRegister = async (_email: string, _password: string, _confirmPassword: string, _wallet: string, _nonce: string, _sign: string, _recaptcha: string) => {
    let toast
    const now = Date.now()
    if (_password !== _confirmPassword) {
      toast = {
        id: `id-${now}`,
        title: `Confirm password is incorrect!`,
        type: 'danger',
      }
      setToasts((prevToasts) => [toast, ...prevToasts])
      return
    }
    // todo ...

    const response = await onRegister(_email, _password, _wallet, _nonce, _sign, _recaptcha)

    if (response.data.success) {
      toast = {
        id: `id-${now}`,
        title: `Signup successfully!`,
        type: 'success',
      }
      setTimeout(() => {
        // parentCallback(true);
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
  const handleChangeConfirmPassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setConfirmPassword(e.currentTarget.value)
    },
    [setConfirmPassword],
  )

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }

  const web3 = useWeb3()
  const getWallet = async () => {
    if (wallet !== '') {
      return
    }
    console.log('get wallet')
    const coinbase = await web3.eth.getCoinbase()
    setWallet(coinbase)
  }

  const handleSign = async () => {
    const coinbase = await web3.eth.getCoinbase()
    const publicAddress = coinbase.toLowerCase()
    try {
      const signature = await web3.eth.personal.sign(
        nonce.toString(),
        publicAddress,
        '', // MetaMask will ignore the password argument here
      )
      // console.log({ publicAddress, signature })
      setSign(signature)
    } catch (e) {
      console.log(e)
    }
  }

  getWallet()

  return (
    <Modal title={t('Register')} onDismiss={onDismiss}>
      <div style={{ marginBottom: '10px' }}>Email</div>
      <div style={{ marginBottom: '10px' }}>
        <Input type='text' value={email} onChange={handleChangeEmail} maxLength={64} />
      </div>
      <div style={{ marginBottom: '10px' }}>Password</div>
      <div style={{ marginBottom: '16px' }}>
        <Input type='password' value={password} onChange={handleChangePassword} maxLength={64} />
      </div>
      <div style={{ marginBottom: '10px' }}>Confirm Password</div>
      <div style={{ marginBottom: '10px' }}>
        <Input type='password' value={confirmPassword} onChange={handleChangeConfirmPassword} maxLength={64} />
      </div>

      <div style={{ marginBottom: '10px' }}>Wallet</div>
      <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Input type='text' readOnly value={wallet} />
        <Button scale='sm' onClick={handleSign}>Sign</Button>
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey='6LfFOrQeAAAAAN13F9RyDrSMh_-AaBXvBFUJKEM5'
        onChange={setRecaptcha}
        style={{ marginBottom: '10px' }}
      />

      <Button style={{ marginBottom: '10px' }} onClick={async () => {
        await handleRegister(email, password, confirmPassword, wallet, nonce.toString(), sign, recaptcha)
      }}>Register</Button>
      {/* <LinkExternal href="/" style={{ alignSelf: 'center' }}>
                {t('Login')}
            </LinkExternal> */}

      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Modal>
  )
}

export default RegisterModal