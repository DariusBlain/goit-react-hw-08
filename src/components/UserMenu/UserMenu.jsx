import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <ul className={s.userMenuList}>
      <li><h3 className={s.userName}>Welcome, {user.name}</h3></li>
      <li><button className={s.logoutButton} onClick={() => dispatch(logout())}>Logout</button></li>
    </ul>
  );
};

export default UserMenu;