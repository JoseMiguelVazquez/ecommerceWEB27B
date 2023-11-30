import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)


export {
  registerUserService,
  loginUserService,
}