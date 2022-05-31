import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Wedex',
  description:
    'The most popular AMM on BSC by user count! Earn DEX through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
  case '/':
    return {
      title: `${t('Home')} | ${t('Wedex')}`,
    }
  case '/competition':
    return {
      title: `${t('Trading Battle')} | ${t('Wedex')}`,
    }
  case '/prediction':
    return {
      title: `${t('Prediction')} | ${t('Wedex')}`,
    }
  case '/farms':
    return {
      title: `${t('Farms')} | ${t('Wedex')}`,
    }
  case '/pools':
    return {
      title: `${t('Pools')} | ${t('Wedex')}`,
    }
  case '/lottery':
    return {
      title: `${t('Lottery')} | ${t('Wedex')}`,
    }
  case '/collectibles':
    return {
      title: `${t('Collectibles')} | ${t('Wedex')}`,
    }
  case '/ifo':
    return {
      title: `${t('Initial Farm Offering')} | ${t('Wedex')}`,
    }
  case '/teams':
    return {
      title: `${t('Leaderboard')} | ${t('Wedex')}`,
    }
  case '/profile/tasks':
    return {
      title: `${t('Task Center')} | ${t('Wedex')}`,
    }
  case '/profile':
    return {
      title: `${t('Your Profile')} | ${t('Wedex')}`,
    }
  default:
    return null
  }
}
