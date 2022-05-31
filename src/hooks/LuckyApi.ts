// eslint-disable-next-line import/no-unresolved
import axios from 'axios'

export default () => {
  axios.defaults.withCredentials = true;
  axios.defaults.timeout = 5000;
  return axios.create({
    baseURL: "https://api.wedex.app"
  })
}