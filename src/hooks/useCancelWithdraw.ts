import Api from './LuckyApi'

const useWithdraw = async (withdrawId) => {
  return Api().post('/cancel_withdraw', {
    withdrawId
  })
}
export default useWithdraw