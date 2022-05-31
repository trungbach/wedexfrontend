import Api from './LuckyApi'

const useResendActivation = async (email, recaptcha) => {
  return Api().post(`/resend_activate_email`, { email, recaptcha })
}
export default useResendActivation