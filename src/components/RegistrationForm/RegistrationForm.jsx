import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './RegistrationForm.module.css'

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email('Invalid email format.')
    .required("Required"),
  password: Yup.string()
    .min(8, "You need to enter at least 8 characters.")
    .max(50, "Too Long!")
    .required("Required"),
});

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={s.form}>
      <h1>Register</h1>
          <Field
            name="name"
            placeholder="Enter your name"
            className={s.field}
          />
          <ErrorMessage name="name" component="div" className={s.error} />
          
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
          
          <button type="submit" className={s.button}>Register</button>
          
          <p>
            You already have an account? 
            <Link to="/login" className={s.link}> Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;