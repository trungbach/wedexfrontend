import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, Heading, Text, ToastContainer, useModal } from 'wedex-uikit/src'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
// import { useWeb3React } from '@web3-react/core'
// import UnlockButton from '../../components/UnlockButton'
// import { useRedeemAllowance } from '../../hooks/useAllowance'
// import useTokenBalance from '../../hooks/useTokenBalance'
// import { useRedeemApprove } from '../../hooks/useApprove'
// import { getUsdtAdress } from '../../utils/addressHelpers'
import { ExternalLink } from 'react-feather'
import useReferrer from '../../hooks/useReferer'
import ReferralLinkBox from './components/ReferralLinkBox'
import LoginModal from './components/LoginModal'
import RegisterModel from './components/RegisterModel'
import useSpin from '../../hooks/useSpin'
import useLoadUserInfo from '../../hooks/useLoadUserInfo'
import useLogout from '../../hooks/useLogout'
import useCheckSocial from '../../hooks/useCheckSocial'
import ResendActivationModal from './components/ResendActivationModal'
import WithdrawModal from './components/WithdrawModal'
import { useProfile } from '../../state/hooks'
import AlertModal from './components/AlertModal'

const CTACards = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div.left-col {
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 16px;
  }
  & > div.right-col {
    flex: 0 0 auto;
    width: 100%;
  }
  & > div {
    padding-right: calc(1.5rem*0.5);
    padding-left: calc(1.5rem*0.5);
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div.left-col {
      flex: 0 0 auto;
      width: 100%;
    }
    & > div.right-col {
      flex: 0 0 auto;
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    & > div.left-col {
      flex: 0 0 auto;
      width: 66.66666667%;
    }
    & > div.right-col {
      flex: 0 0 auto;
      width: 33.33333333%;
    }
  }
`
const LuckyTableContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`
const LuckyTable = styled.table`
  max-width: 400px;
  border: 1px solid #e7e3eb;
  color: 'text';

  & > :not(caption) > * > * {
    padding: 15px;
    border-bottom: 1px solid #e7e3eb;
    text-align: center;
  }
`
const RollNumber = styled.div`
  text-align: center;
  & > * {
    -webkit-animation: counter-data-v-5d395e94 .25s ease-in-out infinite alternate;
    animation: counter-data-v-5d395e94 .25s ease-in-out infinite alternate;
    counter-reset: num var(--num);
    font: 800 40px system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;
    display: inline-block;
    border: 1px solid #eee;
    margin-bottom: 16px;
    padding: 1rem;
    border-radius: 5px;
  }
  & > *::after {
    content: "";
  }
`
const FollowContainer = styled.div`
  margin-bottom: 10px;
  &> a:hover {
    color: #ffffff;
  }
`
const ContainerDiv = styled.div``

const Home: React.FC = () => {
  const { t } = useTranslation()

  const ref = useReferrer()
  const onSpin = useSpin
  const onLoadUserInfo = useLoadUserInfo
  const onLogout = useLogout
  const { useFollowTelegram, useFollowTwitter, onFollowTelegram, onFollowTwitter } = useCheckSocial()

  const [rollNumber, setRollNumber] = useState(0)
  const [wexBalance, setWexBalance] = useState(0)
  const [isFollowTelegram, setFollowTelegram] = useState(useFollowTelegram)
  const [isFollowTwitter, setFollowTwitter] = useState(useFollowTwitter)
  const [logged, setLogged] = useState(false)
  const [userInfo, setUserInfo] = useState(undefined)
  const [userInfoLoading, setUserInfoLoading] = useState(false)
  const [toasts, setToasts] = useState([])
  const { profile } = useProfile()

  const delay = (milisec) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('')
      }, milisec)
    })
  }
  const [showAlertModal] = useModal(<AlertModal />)
  const handleSpin = async () => {
    const interval = setInterval(() => {
      setRollNumber(Math.floor(Math.random() * 100000))
    }, 30)

    const response = await onSpin()
    await delay(1000)
    if (response.data !== undefined && response.data.success) {
      setRollNumber(response.data.lucky_number)
      setWexBalance(response.data.balance)
      const _userInfo = userInfo
      _userInfo.last_spin = Math.floor(Date.now() / 1000)
      setUserInfo(_userInfo)
    }
    if (response.data !== undefined && !response.data.success) {
      const now = Date.now()
      const toast = {
        id: `id-${now}`,
        title: response.data.message,
        type: 'danger',
      }
      setToasts((prevToasts) => [toast, ...prevToasts])
      setRollNumber(0);
    }
    clearInterval(interval)
  }

  const loadUserInfo = async (loginCall) => {
    if (loginCall || (!userInfoLoading && userInfo === undefined)) {
      setUserInfoLoading(true)
      const response = await onLoadUserInfo()
      if (response.data !== undefined && response.data.success) {
        setUserInfo(response.data.user)
        setLogged(true)
        setWexBalance(response.data.user.balance)


        // console.log(userInfo)

        setTimeLeft(calculateTimeLeft())
        // console.log('set time left', calculateTimeLeft())

      } else {
        setUserInfo(null)
      }
      setUserInfoLoading(false)
    }
  }
  console.log(userInfo)
  const handleLogout = async () => {
    await onLogout()
    setLogged(false)
    setUserInfo(null)
  }
  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }

  // const countDown = async () => {
  //   console.log('countdown')
  //   await delay(1000)
  //   countDown()
  // }

  const calculateTimeLeft = () => {
    if (userInfo !== null && userInfo !== undefined && userInfo.last_spin !== undefined) {
      return userInfo.last_spin - (Math.floor(Date.now() / 1000) - 3600 * 3)
    }
    return 0
  }

  const formatTime = (timeLeft) => {
    const hours = Math.floor((timeLeft / (60 * 60)))
    const minutes = Math.floor((timeLeft / 60) % 60)
    const seconds = Math.floor((timeLeft) % 60)
    return `Wait ${hours} hour ${minutes} minutes ${seconds} seconds to the next spin`
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
      // console.log('set time left', calculateTimeLeft())
    }, 1000)
  })

  loadUserInfo(false)
  // countDown()

  const [showLoginModal] = useModal(<LoginModal parentCallback={loadUserInfo} />)
  const [showWithdrawModal] = useModal(<WithdrawModal parentCallback={loadUserInfo} />)
  const [showRegisterModal] = useModal(<RegisterModel />)
  const [showResendActivationModal] = useModal(<ResendActivationModal />)

  return (
    <Page>
      {(userInfoLoading) &&
      <div style={{ textAlign: 'center' }}><img src='/images/lucky-loading.gif' alt='loading' /></div>}
      {(!userInfoLoading) && <CTACards>
        <div className='left-col'>
          <Card>
            <CardBody>
              <Heading scale='lg' mb='24px'>
                {t('Wedex Airdrop')}
              </Heading>
              <LuckyTableContainer>
                <LuckyTable>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>LUCKY NUMBER</th>
                      <th>PAYOUT (DEX)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>0 - 8999</td>
                      <td>0.02</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>9000 - 9988</td>
                      <td>0.25</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>9989 - 9996</td>
                      <td>2.5</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>9997 - 9998</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>9999</td>
                      <td>250</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>10000</td>
                      <td>2500</td>
                    </tr>
                  </tbody>
                </LuckyTable>
              </LuckyTableContainer>
              <ContainerDiv>
                <RollNumber>
                  <span>{Math.floor(rollNumber / 10000)}</span>&nbsp;
                  <span>{Math.floor(rollNumber % 10000 / 1000)}</span>&nbsp;
                  <span>{Math.floor(rollNumber % 1000 / 100)}</span>&nbsp;
                  <span>{Math.floor(rollNumber % 100 / 10)}</span>&nbsp;
                  <span>{Math.floor(rollNumber % 10)}</span>
                </RollNumber>
                {/* <div style={{ textAlign: "center", marginBottom: "16px" }}>Complete these streps before drawing prizes</div> */}
                <div style={{ textAlign: 'center' }}>
                  {!logged &&
                  <div>
                    <Button mr='5px' onClick={showLoginModal}>
                      {t('Login')}
                    </Button>
                    <Button mr='5px' onClick={showRegisterModal}>
                      {t('Register')}
                    </Button>
                    <br />
                    <Button variant='text' onClick={showResendActivationModal}>Resend activation</Button>
                  </div>
                  }
                  {(logged && (!isFollowTelegram || !isFollowTwitter)) &&
                  <FollowContainer>
                    <Button mr='5px' as='a' href='https://twitter.com/WedexApp' external onClick={() => {
                      onFollowTwitter()
                      setFollowTwitter(true)
                    }} style={{color: "#ffffff"}}>
                      {t('Follow Twitter')}
                    </Button>
                    <Button mr='5px' as='a' href='https://t.me/WedexNFTgroup' external onClick={() => {
                      onFollowTelegram()
                      setFollowTelegram(true)
                    }} style={{color: "#ffffff"}}>
                      {t('Join Telegram')}
                    </Button>
                  </FollowContainer>
                  }

                  <div style={{ marginBottom: '10px' }}>{(logged && isFollowTwitter && isFollowTelegram) &&
                  <Button style={{ width: '200px' }} disabled={userInfo === undefined || timeLeft > 0}
                    onClick={showAlertModal}>Spin</Button>}</div>
                  <div>{(userInfo === undefined || timeLeft > 0) && formatTime(timeLeft)}</div>

                </div>
              </ContainerDiv>
            </CardBody>
          </Card>
        </div>
        <div className='right-col'>
          {logged && <Card mb='16px'>
            <CardBody>
              <div style={{ textAlign: 'center' }}><img src={profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : 'https://www.w3schools.com/w3images/avatar2.png'}
                alt='avatar' style={{
                  borderRadius: '50%',
                  maxWidth: '80px',
                  marginBottom: '16px',
                }} /></div>
              <Text style={{ textAlign: 'center' }}>{userInfo.email}</Text>
              <Text style={{
                textAlign: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#639',
              }}>{(wexBalance / 100).toFixed(2)}</Text>
              <Text style={{
                textAlign: 'center', fontWeight: 'bold',
                marginBottom: '15px',
              }}>DEX</Text>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <Button as="a" href="/profile" scale="sm">Profile</Button>
                {/*  <Button onClick={showWithdrawModal} */}
                {/*          scale='sm'>Withdraw</Button> */}
              </div>
            </CardBody>
          </Card>}

          <Card>
            <CardBody>
              <Heading scale='lg' mb='24px'>
                {t('Affiliate Program')}
              </Heading>
              <Text mb='16px'>By Getting referrals you’ll receive 50% of each claim your referrals get , Get more
                referrals, earn more DEX Available after login</Text>
              <Text mb='10px'>Your personal link:</Text>
              <ReferralLinkBox
                link={logged ? `https://airdrop.wedex.app?team=${userInfo.wallet}` : 'https://airdrop.wedex.app'} />
              <div style={{ marginTop: '16px' }}>Invited
                users: {(userInfo !== undefined && userInfo !== null) ? userInfo.invited_users : 0}</div>
            </CardBody>
          </Card>
        </div>
      </CTACards>}
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </Page>
  )
}

export default Home
