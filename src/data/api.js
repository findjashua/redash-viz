import axios from 'axios'

import { entityUrl } from './urls'

export default {
  get: (entity, options) => {
    const { id, params } = options
    let url = entityUrl(entity)
    if (id) url = `${url}/${id}`
    return axios.get(url, params)
  }
}
