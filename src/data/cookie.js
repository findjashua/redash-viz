import axios from 'axios'

import { loginUrl } from './urls'

export default () => {
  const data = new FormData()
  data.append('email', 'admin')
  data.append('password', 'admin')

  return axios.post(loginUrl, data)
}
