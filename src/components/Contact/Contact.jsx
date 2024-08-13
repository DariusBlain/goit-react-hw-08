import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import {  deleteContactThunk } from "../../redux/contactsOps";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>
          <FaUser size="14" className={s.icon} />
          {name}
        </li>
        <li>
          <FaPhoneAlt size="14" className={s.icon} />
          {number}
        </li>
      </ul>
      <button id={id} onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
