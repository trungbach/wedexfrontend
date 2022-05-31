import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import ReCAPTCHA from 'react-google-recaptcha'
import { Button, Card, CardBody, Heading, Input, BaseLayout, CardHeader, ToastContainer } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import { Flex } from '@pancakeswap/uikit'
import useLoadUserInfo from '../../hooks/useLoadUserInfo'
import useLogout from '../../hooks/useLogout'
import useWithdraw from '../../hooks/useWithdraw'
import useUpdatePassword from '../../hooks/useUpdatePassword'


const StyledCard = styled(Card)`
  max-width: 600px;
  margin: auto auto 30px;
`
const Profile: React.FC = () => {
  const { t } = useTranslation()
  const onWithdraw = useWithdraw
  const onLogout = useLogout
  const onUpdatePassword = useUpdatePassword
  const recaptchaRef = React.createRef()
  const handleWithdraw = async (amount: number, recaptcha: string) => {
    const now = Date.now()
    if(amount<10) {
      setToasts((prevToasts) => [{
        id: `id-${now}`,
        title: "Minimum withdraw is 10 DEX",
        type: 'danger',
      }, ...prevToasts])
    }
    else {
      const response = await onWithdraw(amount*100, recaptcha)
      let toast
      console.log(response)
      if (response.data.success) {
        toast = {
          id: `id-${now}`,
          title: response.data.message,
          type: 'success',
        }
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
  }
  const handleUpdatePassword = async () => {
    const response = await onUpdatePassword(oldPassword,newPassword, recaptcha)

    let toast
    const now = Date.now()
    if (response.data.success) {
      toast = {
        id: `id-${now}`,
        title: response.data.message,
        type: 'success',
      }
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
  const [withdrawAmount, setWithdrawAmount] = useState(0)
  const [depositAmount, setDepositAmount] = useState(0)
  const [toasts, setToasts] = useState([])
  const [recaptcha, setRecaptcha] = useState("")
  const handleChangeWithdrawAmount = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setWithdrawAmount(parseFloat(e.currentTarget.value))
    },
    [setWithdrawAmount],
  )
  const handleChangeDepositAmount = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setDepositAmount(parseFloat(e.currentTarget.value))
    },
    [setDepositAmount],
  )
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const handleChangeOldPassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setOldPassword(e.currentTarget.value)
    },
    [setOldPassword],
  )
  const handleChangePassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setNewPassword(e.currentTarget.value)
    },
    [setNewPassword],
  )
  const handleChangeConfirmPassword = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setConfirmPassword(e.currentTarget.value)
    },
    [setConfirmPassword],
  )
  const handleLogout = async () => {
    await onLogout()
    setLogged(false)
    setUserInfo(null)
  }
  const onLoadUserInfo = useLoadUserInfo
  const [logged, setLogged] = useState(false)
  const [userInfo, setUserInfo] = useState(undefined)
  const [userInfoLoading, setUserInfoLoading] = useState(false)
  const loadUserInfo = async (loginCall) => {
    if (loginCall || (!userInfoLoading && userInfo === undefined)) {
      setUserInfoLoading(true)
      const response = await onLoadUserInfo()
      if (response.data !== undefined && response.data.success) {
        setUserInfo(response.data.user)
        console.log(response.data.user)
        setLogged(true)
        console.log(logged)
        console.log(userInfo)
      } else {
        setUserInfo(null)
      }
      setUserInfoLoading(false)
      console.log(userInfoLoading)
    }
  }

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }
  useEffect( ()=>{
    loadUserInfo(false)
  })

  if(logged)
  return (
    <Page>
      <StyledCard>
        <CardHeader>
          <Heading scale="lg">Deposit</Heading>
        </CardHeader>
        <CardBody>
          <div style={{ marginBottom: '10px' }}>Amount to deposit</div>
          <div style={{ marginBottom: '10px' }}><Input type='number' value={depositAmount} onChange={handleChangeDepositAmount} /></div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6LfFOrQeAAAAAN13F9RyDrSMh_-AaBXvBFUJKEM5'
            onChange={setRecaptcha}
            style={{ marginBottom: '10px' }}
          />
        </CardBody>
      </StyledCard>
      <StyledCard>
        <CardHeader>
          <Heading scale="lg">Withdraw</Heading>
        </CardHeader>
        <CardBody>
          <div style={{ marginBottom: '10px' }}>Amount</div>
          <div style={{ marginBottom: '10px' }}><Input type='number' value={withdrawAmount} onChange={handleChangeWithdrawAmount} /></div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6LfFOrQeAAAAAN13F9RyDrSMh_-AaBXvBFUJKEM5'
            onChange={setRecaptcha}
            style={{ marginBottom: '10px' }}
          />
          <p style={{marginBottom: '10px'}}>* Minimum Withdrawal: 10 DEX</p>
          <p style={{marginBottom: '10px'}}>* Withdrawal fee: 1 DEX</p>
          <Flex justifyContent="space-between">
            <Button style={{ marginBottom: '10px' }} onClick={async () => {
              await handleWithdraw(withdrawAmount, recaptcha)
            }}>Withdraw</Button>
            <Button as="a" href="/history">History</Button>
          </Flex>
        </CardBody>
      </StyledCard>
      <StyledCard>
        <CardHeader>
          <Heading scale="lg">Update Password</Heading>
        </CardHeader>
        <CardBody>
          <div style={{ marginBottom: '10px' }}>Old Password</div>
          <div style={{ marginBottom: '16px' }}>
            <Input type='password' value={oldPassword} onChange={handleChangeOldPassword} maxLength={64} />
          </div>
          <div style={{ marginBottom: '10px' }}>New Password</div>
          <div style={{ marginBottom: '16px' }}>
            <Input type='password' value={newPassword} onChange={handleChangePassword} maxLength={64} />
          </div>
          <div style={{ marginBottom: '10px' }}>Confirm New Password</div>
          <div style={{ marginBottom: '10px' }}>
            <Input type='password' value={confirmPassword} onChange={handleChangeConfirmPassword} maxLength={64} />
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey='6LfFOrQeAAAAAN13F9RyDrSMh_-AaBXvBFUJKEM5'
            onChange={setRecaptcha}
            style={{ marginBottom: '10px' }}
          />
          <Flex justifyContent="space-between">
            <Button style={{ marginBottom: '10px' }} onClick={async () => {
              await handleUpdatePassword()
            }}>Update Password</Button>
            <Button ml="20px">Logout</Button>
          </Flex>
        </CardBody>
      </StyledCard>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
      <Button as="a" href="/">Return to HomePage</Button>
    </Page>
  )
  return (
    <Page>
      {t("You're not login!")}
      <Button as="a" href="/">Return to HomePage</Button>
    </Page>
  )
}

export default Profile