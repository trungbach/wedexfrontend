import { FarmConfig } from './types'

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  // {
  //   pid: null,
  //   lpSymbol: 'WEX-USDT LP',
  //   lpAddresses: {
  //     97: '0xd13f7f6b2ede69d127e5b1d4e3814e3280ac11fa',
  //     56: '0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae',
  //   },
  //   token: tokens.wex,
  //   quoteToken: tokens.usdt,
  // },
]

export default priceHelperLps
