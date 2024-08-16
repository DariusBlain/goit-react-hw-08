import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import s from "./Navigation.module.css";

const Navigation = () => {

   const activeLink = ({ isActive }) => {
     return isActive ? `${s.navLink} ${s.activeLink}` : s.navLink;
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <ul className={s.navList}>
      <li className={s.navItem}><NavLink to="/" className={activeLink}>Home</NavLink></li>
      {isLoggedIn && <li className={s.navItem}><NavLink to="/contacts" className={activeLink}>Contacts</NavLink></li>}
    </ul>
  );
};

export default Navigation;