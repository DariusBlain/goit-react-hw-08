import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const Login = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  }
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
    options.resetForm();
  }
  
  if (isLoggedIn) {
    return <Navigate to="/"/>
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form >
          <Field name="email" placeholder="Enter your email"/>
          <Field name="password" type='password' placeholder="Enter your password" />
          <button type='submit'>Login</button>
          <p>You don't have  account? 
            <Link to="/register">Sing up</Link>
          </p>
          
        </Form>
      </Formik>
    </div>
  )
}

export default Login