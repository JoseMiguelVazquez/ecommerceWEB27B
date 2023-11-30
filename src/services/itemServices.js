import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const getAllItems = () => axios.get(`${BASE_URL}/items`)

export {
    getAllItems
}