import Api from './LuckyApi'

const useForgotPassword = async (email, recaptcha) => {
  return Api().post(`/forgot_password`, { email, recaptcha })
}
export default useForgotPassword