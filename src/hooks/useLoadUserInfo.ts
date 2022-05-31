import Api from './LuckyApi'

const useLoadUserInfo = async () => {
  return Api().get('/is_logged')
}
export default useLoadUserInfo