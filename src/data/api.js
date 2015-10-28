import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export default {
  login: () => {
    const url = `${baseUrl}/login`
    return axios.get(url)
  },
  get: (entity, options) => {
    const { id, params } = options
    const url = `${baseUrl}/${entity}/${id}`
    return axios.get(url, params)
  }
}
