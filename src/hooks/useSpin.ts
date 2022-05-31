import Api from './LuckyApi'

const useSpin = async () => {
    return Api().post('/spin')
}
export default useSpin