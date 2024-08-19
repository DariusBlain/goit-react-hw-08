
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "../pages/NotFound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PrivateRoute } from "../Routes/PrivateRoute";
import { refreshUser } from "../redux/auth/operations";
import { RestrictedRoute } from "../Routes/RestrictedRoute";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import HomePage from "../pages/HomePage/HomePage";
import { selectIsRefreshing } from "../redux/auth/selectors";
import { ColorRing } from "react-loader-spinner";
import LoginPage from "../pages/auth/LoginPage/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage/RegistrationPage";
function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  

  return isRefreshing ? <ColorRing
  visible={true}
  height="240"
  width="240"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /> : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={
            <PrivateRoute>
            <ContactsPage />
            </PrivateRoute>} />
          <Route path="login" element={ <RestrictedRoute><LoginPage /></RestrictedRoute>} />
          <Route path="register" element={ <RestrictedRoute><RegistrationPage /></RestrictedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
