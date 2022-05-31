import React, { lazy } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ResetCSS } from 'wedex-uikit/src'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchProfile, usePollBlockNumber, usePollCoreFarmData, usePollFarmsData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import EasterEgg from './components/EasterEgg'
// import Pools from './views/Pools'
import history from './routerHistory'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))

const Activate = lazy(() => import('./views/Activate'))
const ConfirmWithdraw = lazy(() => import('./views/ConfirmWithdraw'))
const Profile = lazy(() => import('./views/Profile'))
const ConfirmNewPassword = lazy(() => import('./views/ForgotPassword'))
// const Lottery = lazy(() => import('./views/Lottery'))

// const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))

const History = lazy(() => import('./views/History'))
const Dice = lazy(() => import('./views/Dice'))
const Crash = lazy(() => import('./views/Crash'))
const Plinko = lazy(() => import('./views/Plinko'))
const Mines = lazy(() => import('./views/Mines'))
// const Teams = lazy(() => import('./views/Teams'))
// const Team = lazy(() => import('./views/Teams/Team'))
// const ProfileSetup = lazy(() => import('./views/Profile'))
// const ProfileDetail = lazy(() => import('./views/Profile/Profile'))

// const TradingCompetition = lazy(() => import('./views/TradingCompetition'))
// const Predictions = lazy(() => import('./views/Predictions'))
// const Referral = lazy(() => import('./views/Referral'))
// const ComingSoon = lazy(() => import('./components/ComingSoon'))
// const Lucky = lazy(() => import('./views/Lucky'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  // const account = useWeb3React();

  // usePollBlockNumber()
  // useEagerConnect()
  // useFetchProfile()
  // usePollCoreFarmData()
  // usePollFarmsData()
  return (
    <Router history={history}>
      <ResetCSS />
      <GlobalStyle />
      <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/activate">
              <Activate />
            </Route>
            <Route path="/confirm_withdraw">
              <ConfirmWithdraw />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/confirm_new_password" exact>
              <ConfirmNewPassword />
            </Route>
            {/* Minigame  */}
            <Route path="/classic-dice" exact>
              <Dice />
            </Route>
            <Route path="/mines" exact>
              <Mines />
            </Route>
            <Route path='/crash' exact>
              <Crash />
            </Route>
            <Route path='/plinko' exact>
              <Plinko />
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </SuspenseWithChunkError>
      </Menu>
      <EasterEgg iterations={2} />
      <ToastListener />
    </Router>
  )
}

export default React.memo(App)
