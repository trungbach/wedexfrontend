import Api from './LuckyApi'

const useActivate = async (id, key) => {
  return Api().get(`/activate?id=${id}&key=${key}`)
}
export default useActivate