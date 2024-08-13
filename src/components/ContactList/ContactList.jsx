import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {selectFilteredContacts} from '../../redux/contactsSlice'


const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts)

  return (
    <>
      <ul className={s.list}>
        {visibleContacts.length ? visibleContacts.map((contact) => {
          return (
            <li key={contact.id} className={s.listItem}>
              <Contact data={contact} />
            </li>
          );
        }): (<h2>Contacts list empty!</h2>)}
      </ul>
    </>
  );
};

export default ContactList;
