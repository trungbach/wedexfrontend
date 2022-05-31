import Api from './LuckyApi'

const useLogin = async (email, password, recaptcha) => {
    return Api().post('/login', {
        email,
        password,
        recaptcha
    })
}
export default useLogin