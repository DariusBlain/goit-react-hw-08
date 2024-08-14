import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import { error, loading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/contacts/operations';

const Contacts = () => {
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
  )
}

export default Contacts