import Api from './LuckyApi'

const useConfirmWithdraw = async (id, key) => {
  return Api().get(`/confirm_withdraw?id=${id}&key=${key}`)
}
export default useConfirmWithdraw