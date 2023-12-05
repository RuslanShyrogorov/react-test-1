import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div>
      <NavLink
        className="logo"
        to='/home'
      >
        <img
          src="../../assets/logo.svg"
          alt="logo site"
          width="110"
          height="30"
        />
      </NavLink>
    </div>
  )
}

export default Logo;