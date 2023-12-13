import axios from 'axios'

const BASE_URL = 'https://ecommerce-fake-store-su3i.onrender.com'

const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)

// funcion para hacer el logout
const logoutUserService = () => {
  localStorage.removeItem('token')
  window.location.href = '/'
}

const getUser = (token) => {
  const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
  return axios.get(`${BASE_URL}/users/me`, config)
}


export {
  registerUserService,
  loginUserService,
  logoutUserService,
  getUser
}