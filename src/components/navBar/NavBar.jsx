import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { logoutUserService } from "../../services/userServices";
import { FaCircleUser } from "react-icons/fa6";
import { IoExitSharp } from "react-icons/io5";

import { useAuthContext } from "../../context/AuthContext";
import { getUser } from "../../services/userServices";

export default function NavBar() {
  const { user, isAuth } = useAuthContext();
  const [userData, setuserData] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser(token)
          .then((response) => {
            setuserData(response.data);
          })
          .catch((error) => console.error(error.message));
    }
  }, [])

  return (
    <nav className="nav">
      <div className="nav__logo">Logo</div>

      <div className="nav__options">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {isAuth ? (
            <li>
              <div className="userStyle">
                <FaCircleUser />
                <span id="userName">{userData && userData.first_name}</span>
              </div>
            </li>
          ) : (
            <>
              <li>
                <NavLink to={"/login"}>Ingresa</NavLink>
              </li>
              <li>
                <NavLink to={"/signup"}>Regístrate</NavLink>
              </li>
            </>
          )}
          { user.role === "ADMIN" ? <li id="settingsLink">settings</li> :  null }

          <li onClick={logoutUserService}>
            <IoExitSharp />
          </li>
        </ul>
      </div>
    </nav>
  );
}
