import { MenuEntry } from 'wedex-uikit/src'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Minigame'),
    icon: 'HomeIcon',
    items: [
      {
        label: t('Classic Dice'),
        href: '/classic-dice',
      },
      {
        label: 'Mines',
        href: '/mines',
      },
      {
        label: 'Crash',
        href: '/crash',
      },
      {
        label: 'Plinko',
        href: '/plinko',
      },
    ],
  },
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: 'https://wedex.app',
  },
  {
    label: t('Swap'),
    icon: 'TradeIcon',
    href: 'https://exchange.wedex.app/#/swap?outputCurrency=0x09bb6042a19bb3a6981e9a47ec0f006dbd28a8d1&inputCurrency=0x55d398326f99059fF775485246999027B3197955',
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: 'https://wedex.app/farms',
  },
  // {
  //   label: t('Trade'),
  //   icon: 'PredictionsIcon',
  //   href: 'https://wedex.app/prediction',
  // },
  {
    label: t('Team & Profile'),
    icon: 'GroupsIcon',
    items: [
      {
        label: t('Policy'),
        href: 'https://wedex.app/profile',
      },
      {
        label: t('Team'),
        href: 'https://wedex.app/team',
      },
    ],
  },
  {
    label: t('NFT Marketplace'),
    icon: 'NftIcon',
    href: 'https://wedex.app/nft',
  },
  {
    label: t('Airdrop'),
    icon: 'PredictionsIcon',
    href: 'https://airdrop.wedex.app',
  },
  {
    label: t('IFO'),
    icon: 'IfoIcon',
    href: 'https://wedex.app/ifo',
  },
  {
    label: t('Lending & Borrowing'),
    icon: 'LendingIcon',
    href: 'https://wedex.app/lending',
  },
  {
    label: t('Audit'),
    icon: 'VerifiedIcon',
    href: 'https://github.com/wedexapp/Audit',
  },
  {
    label: t('Chart'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Poocoin'),
        href: 'https://poocoin.app/tokens/0x09bb6042a19bb3a6981e9a47ec0f006dbd28a8d1',
      },
      {
        label: t('DEXtools'),
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0x1921D10cB9365869341E46f687Cf16209951b4f9',
      },
    ],
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: t('Github'),
        href: 'https://github.com/wedexapp',
      },
      {
        label: t('Docs'),
        href: 'https://docs.wedex.app',
      },
    ],
  },
]

export default config
