import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format.')
      .required('Required'),
    password: Yup.string()
      .min(8, 'You need to enter at least 8 characters.')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.container}>
      <div className={s.formWrapper}>
        <h1 className={s.heading}>Login</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={s.form}>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className={s.field}
            />
            <ErrorMessage name="email" component="div" className={s.error} />
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              className={s.field}
            />
            <ErrorMessage name="password" component="div" className={s.error} />
            <button type="submit" className={s.button}>
              Login
            </button>
            <p className={s.linkText}>
              You don't have an account?{' '}
              <Link to="/register" className={s.link}>Sign up</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;