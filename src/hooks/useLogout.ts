import Api from './LuckyApi'

const useSpin = async () => {
  return Api().post('/logout')
}
export default useSpin