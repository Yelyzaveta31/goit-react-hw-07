import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
function App() {
  return (
    <div>
      <h1 style={{ marginLeft: "40px", fontSize: "40px", fontWeight: "bold" }}>
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
