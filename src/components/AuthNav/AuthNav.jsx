import { NavLink } from "react-router-dom"
import s from "./AuthNav.module.css";

const AuthNav = () => {
  const activeLink = ({ isActive }) => {
    return isActive ? `${s.authNavLink} ${s.activeLink}` : s.authNavLink;
  };
  return (
    <ul className={s.authNavList}>
      <li><NavLink to="/login" className={activeLink}>Login</NavLink></li>
      <li><NavLink to="/register" className={activeLink}>Register</NavLink></li>
    </ul>
  );
};

export default AuthNav;