import axios from 'axios';

const axiosAuth = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
})

export default axiosAuth;