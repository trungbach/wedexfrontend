import Api from './LuckyApi'

const useLoadUserWithdrawals = async (page) => {
  return Api().post('/withdrawal_history',{
          page
  })
}
export default useLoadUserWithdrawals