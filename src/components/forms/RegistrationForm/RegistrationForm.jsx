import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup";
import { register } from '../../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import s from '../forms.module.css'

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
    
const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

    return (
      <div className={s.formWrapper}>
        <h1 className={s.heading}>Register</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={s.form}>
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
        </Form>
        </Formik>
        </div>
  )
}

export default RegistrationForm