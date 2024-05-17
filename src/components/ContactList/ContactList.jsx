import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
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
