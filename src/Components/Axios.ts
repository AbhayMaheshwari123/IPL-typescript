import eventemitter from '../Components/Event'
import axios from 'axios'

axios.interceptors.request.use(function (config) {
    eventemitter.emit('SHOW_LOADER')
    return config;
  }, function (error) {
    eventemitter.emit('HIDE_LOADER')
    return Promise.reject(error);
  });


axios.interceptors.response.use(function (response) {
    eventemitter.emit('HIDE_LOADER')
    return response;
  }, function (error) {
    return Promise.reject(error);
  });