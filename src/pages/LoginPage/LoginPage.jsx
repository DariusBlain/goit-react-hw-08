import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from "./LoginPage.module.css"
import LoginForm from '../../components/forms/LoginForm/LoginForm';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.container}>
      <LoginForm />
      <p className={s.linkText}>
              You don't have an account?{' '}
              <Link to="/register" className={s.link}>Sign up</Link>
            </p>
     </div>
  );
};

export default LoginPage;