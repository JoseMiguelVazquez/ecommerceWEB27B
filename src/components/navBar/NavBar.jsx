import './NavBar.scss'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
   <nav className='nav'>
    <div className='nav__logo'>Logo</div>

    <div className='nav__options'>
        <ul>
            <li>
              <NavLink to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/login'>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to='/signup'>
                Signup
              </NavLink>
            </li>
        </ul>
    </div>
   </nav>
  )
}
