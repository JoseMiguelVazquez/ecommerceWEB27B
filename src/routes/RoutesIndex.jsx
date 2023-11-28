import { Route, Routes } from 'react-router-dom'
import Items from '../pages/items/Items'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'

export default function RoutesIndex() {
  return (
    <Routes>
      <Route path='/' element={<Items />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}
