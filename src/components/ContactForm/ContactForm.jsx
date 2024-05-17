import { Field, Form, Formik, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addContactsThunk, fetchContactsThunk } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please, add your name"),
  number: Yup.string()
    .min(7, "Too Short!")
    .max(15, "Too Long!")
    .required("Please, add your phone"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    dispatch(addContactsThunk(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.form_list} htmlFor="name">
          Name
        </label>
        <Field type="text" name="name" id="name" />
        <ErrorMessage className={s.error} name="name" component="span" />
        <label className={s.form_list} htmlFor="number">
          Number
        </label>
        <Field type="number" name="number" id="number" />
        <ErrorMessage className={s.error} name="number" component="span" />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
