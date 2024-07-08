import { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import ContactsDisplay from "./components/ContactsDisplay";
import NewPersonForm from "./components/NewPersonForm";
import { getAll } from "./services/persons";
import Notification from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    getAll().then((response) => setPersons(response));
  }, []);

  const handleFilterChange = (e) => {
    const matchingPeople = [];
    persons.forEach((person) => {
      const nameInLowerCase = person.name.toLowerCase();
      if (nameInLowerCase.includes(e.target.value)) matchingPeople.push(person);
    });

    setFilteredPersons(matchingPeople);
    setIsFiltered(true);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification notification={notification}></Notification>
      <FilterForm onChange={handleFilterChange} />
      <h2>add a new</h2>
      <NewPersonForm
        persons={persons}
        setPersons={setPersons}
        setIsFiltered={setIsFiltered}
        setNotification={setNotification}
      />
      <h2>Numbers</h2>
      <ContactsDisplay
        persons={isFiltered ? filteredPersons : persons}
        setPersons={setPersons}
      />
    </div>
  );
}

export default App;
