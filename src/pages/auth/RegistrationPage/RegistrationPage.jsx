import {  useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import s from '../auth.module.css'
import RegistrationForm from '../../../components/forms/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.container}>
      <RegistrationForm />
      <p className={s.linkText}>
            You already have an account? 
            <Link to="/login" className={s.link}> Sign in</Link>
          </p>
    </div>
  );
};

export default RegistrationPage;