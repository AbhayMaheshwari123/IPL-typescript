import axios from 'axios'
import eventemitter from '../Components/Event'

axios.interceptors.request.use(
  (config) => {
    eventemitter.emit('SHOW_LOADER')
    return config
  },
  (error) => {
    eventemitter.emit('HIDE_LOADER')
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    eventemitter.emit('HIDE_LOADER')
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
