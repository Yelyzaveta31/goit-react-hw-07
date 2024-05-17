import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactsThunk } from "../../redux/contactsOps";
import { selectIsLoading } from "../../redux/contactsSlice";
import Loader from "../Loader/Loader";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <li className={s.contact_item}>
        <div className={s.contact_container}>
          <p className={s.contact_text}>
            <FaUser />
            <span className={s.contact_span}>{item.name}</span>
          </p>
          <p className={s.contact_text}>
            <FaPhoneAlt />
            <span className={s.contact_span}>{item.number}</span>
          </p>
        </div>
        <button
          className={s.button}
          onClick={() => dispatch(deleteContactsThunk(item.id))}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
