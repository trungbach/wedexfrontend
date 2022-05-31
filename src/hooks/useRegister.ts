import Cookies from 'universal-cookie'
import Api from './LuckyApi'

const cookies = new Cookies()

const useRegister = async (email, password, wallet, nonce, sign, recaptcha) => {

  const referrerCode = cookies.get('referal_code')

  return Api().post('/register', {
    email,
    password,
    wallet,
    nonce,
    sign,
    recaptcha,
    referrer_id: referrerCode,
  })
}
export default useRegister