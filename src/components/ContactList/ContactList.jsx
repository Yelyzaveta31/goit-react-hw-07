import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredItems = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={s.contact_list}>
        {filteredItems.map((item) => (
          <Contact item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
