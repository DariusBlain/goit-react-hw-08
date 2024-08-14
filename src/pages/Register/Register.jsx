import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  }
  const isLoggedIn = useSelector(selectIsLoggedIn);


  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
    options.resetForm();
  }
  
  if (isLoggedIn) {
    return <Navigate to="/"/>
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form >
          <Field name="name" placeholder="Enter your name"/>
          <Field name="email" placeholder="Enter your email"/>
          <Field name="password" type='password' placeholder="Enter your password" />
          <button type='submit'>Login</button>
          <p>You already have  account? 
            <Link to="/login">Sing in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  )
}

export default Register;