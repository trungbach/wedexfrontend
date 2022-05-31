import Cookies from 'universal-cookie'

const cookies = new Cookies()

const useCheckSocial = () => {
  const followTelegram = cookies.get('followTelegram')
  const followTwitter = cookies.get('followTwitter')


  const useFollowTelegram = () => {
    if (followTelegram && followTelegram !== null && followTelegram !== undefined) {
      return followTelegram
    }
    return false
  }

  const useFollowTwitter = () => {
    if (followTwitter && followTwitter !== null && followTwitter !== undefined) {
      return followTwitter
    }
    return false
  }
  const onFollowTwitter = () => {
    cookies.set('followTwitter', true)
  }
  const onFollowTelegram = () => {
    cookies.set('followTelegram', true)
  }

  return { useFollowTelegram, useFollowTwitter, onFollowTwitter, onFollowTelegram }
}

export default useCheckSocial
