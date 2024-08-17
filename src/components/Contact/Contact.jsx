import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import {  deleteContactThunk } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();


  const handleDelete = (contactId) => {

    const confirmDelete = () => {
    toast.dismiss();
    dispatch(deleteContactThunk(contactId));
  };

  const cancelDelete = () => {
    toast.dismiss();
    };
    
    toast.custom((t) => (
    <div className={s.modalOverlay}>
      <div className={s.modalContainer} >
        <p>Are you sure you want to delete this contact?</p>
        <div className={s.modalButtonsWrapper}>
          <button className={s.modalButtonConfirm}
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button className={s.modalButtonCancel}
            onClick={cancelDelete}
          >
            No
          </button>
        </div>
      </div>
    </div>
  ));
};

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
      <button id={id} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
