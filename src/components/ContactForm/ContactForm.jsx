import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^[0-9-]+$/,
      "Invalid input: only numbers and hyphens are allowed."
    )
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContactThunk({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <Form className={s.form}>
        <label className={s.label} htmlFor={nameFieldId}>
          Name
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>

        <label className={s.label} htmlFor={numberFieldId}>
          Number
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage className={s.error} name="number" component="span" />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
