import Api from './LuckyApi'

const useWithdraw = async (amount, recaptcha) => {
  return Api().post('/withdraw', {
    amount,
    recaptcha
  })
}
export default useWithdraw