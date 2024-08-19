
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../../../redux/auth/operations';
import s from "../forms.module.css"




const LoginForm = () => {
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
    
      const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };
    
  return (
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
          </Form>
        </Formik>
      </div>
   
  )
}

export default LoginForm