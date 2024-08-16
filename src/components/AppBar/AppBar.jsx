import { useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import s from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <nav className={s.nav}>
          <Navigation />
          {!isLoggedIn ? <AuthNav /> : <UserMenu />}
        </nav>
      </header>
    </div>
  );
};

export default AppBar;
