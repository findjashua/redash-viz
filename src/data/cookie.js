import axios from 'axios'

import getUrl from './urls'

export default () => {
  const data = new FormData()
  data.append('email', 'admin')
  data.append('password', 'admin')

  return axios.post(getUrl('login'), data)
}
