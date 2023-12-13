import axios from 'axios'

const BASE_URL = 'https://ecommerce-fake-store-su3i.onrender.com'

const getAllItems = () => axios.get(`${BASE_URL}/items`)

export {
    getAllItems
}