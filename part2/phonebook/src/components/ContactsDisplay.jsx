import { deletePerson } from "../services/persons";

const ContactsDisplay = ({ persons, setPersons }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      deletePerson(id).then((deletedPerson) => {
        const updatedPersons = persons.filter(
          (person) => person.id !== deletedPerson.id
        );
        setPersons(updatedPersons);
      });
    }
  };

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id, person.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsDisplay;
