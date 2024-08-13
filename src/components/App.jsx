import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { error, loading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContactsThunk } from "../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const isLoading = useSelector(loading);
  const isError = useSelector(error)

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <h1>Loading...</h1>}
      {isError  && <h2>Something went wrong!</h2>}
      <ContactList />
    </div>
  );
}

export default App;
