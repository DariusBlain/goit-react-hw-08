import { useDispatch, useSelector } from "react-redux";
import {  NavLink } from "react-router-dom"
import { selectIsLoggedIn, selectToken, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);


  return (
    <header>
      <h2>Phonebook</h2>
      <h3>{user.name}</h3>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        {!isLoggedIn &&
          (<>
            <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink> </li>
          </>)
        }        
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      {isLoggedIn && <li><button onClick={() => dispatch(logoutThunk())}>Logout</button></li>}
      </ul>



    </header>
  )
}

export default Header