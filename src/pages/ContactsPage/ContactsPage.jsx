import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactList from '../../components/ContactList/ContactList'
import SearchBox from '../../components/SearchBox/SearchBox'
import { error, loading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import s from "./ContactsPage.module.css";
import { ColorRing } from 'react-loader-spinner';

const ContactsPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  
  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      {isLoading && <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />}
      {isError && <h2>Something went wrong!</h2>}
      <ContactList />
    </div>
  );
};

export default ContactsPage