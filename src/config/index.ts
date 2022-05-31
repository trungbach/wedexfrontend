import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// CAKE_PER_BLOCK details
// 40 WEX is minted per block
// 20 WEX per block is sent to Burn pool (A farm just for burning cake)
// 10 WEX per block goes to WEX syrup pool
// 10 WEX per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.tsx = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// WEX/Block in src/views/ForgotPassword/components/CakeStats.tsx = 20 (40 - Amount sent to burn pool)

export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://wedex.app'
export const BASE_EXCHANGE_URL = 'https://exchange.wedex.app'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://bscscan.com'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
// export const DEFAULT_GAS_LIMIT = 400000
export const DEFAULT_GAS_PRICE = 5
export const TESTNET_CHAIN_ID = '97'
export const MAINNET_CHAIN_ID = '56'
