import Api from './LuckyApi'

const useConfirmNewPassword = async (id, key) => {
  return Api().post(`/update_password`, { id, key })
}
export default useConfirmNewPassword