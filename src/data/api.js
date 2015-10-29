import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export default {
  get: (entity, options) => {
    const { id, params } = options
    const url = `${baseUrl}/${entity}/${id}`
    return axios.get(url, params)
  }
}
