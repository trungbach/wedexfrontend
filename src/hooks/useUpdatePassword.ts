import Api from './LuckyApi'

const useUpdatePassword = async (oldPassword, newPassword, recaptcha) => {
  return Api().post('/update_password', {
    oldPassword,
    newPassword,
    recaptcha
  })
}
export default useUpdatePassword