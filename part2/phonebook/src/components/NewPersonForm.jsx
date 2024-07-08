import { useEffect, useState } from "react";
import { addPerson, changeNumber, getAll } from "../services/persons";

const NewPersonForm = ({
  persons,
  setPersons,
  setIsFiltered,
  setNotification,
}) => {
  const [newPerson, setNewPerson] = useState({ id: 0, name: "", number: "" });
  const newId = persons.length > 0 ? persons[persons.length - 1].id + 1 : 1;

  const handleNameChange = (e) => {
    setNewPerson({ ...newPerson, id: newId, name: e.target.value });
  };

  const handleNumberChange = (e) => {
    setNewPerson({ ...newPerson, number: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingPersonWithSameName = persons.filter(
      (person) =>
        person.name.toLowerCase().trim() === newPerson.name.toLowerCase().trim()
    )[0];
    const nameExists = existingPersonWithSameName ? true : false;
    const numberIsSame =
      nameExists && existingPersonWithSameName.number === newPerson.number;

    if (numberIsSame) {
      window.alert(`${newPerson.name} is already in the phonebook`);
    } else {
      if (nameExists) {
        const updatedPerson = {
          ...existingPersonWithSameName,
          number: newPerson.number,
        };

        if (window.confirm(`Changing ${updatedPerson.name}'s number`)) {
          changeNumber(updatedPerson)
            .then((changedPerson) => {
              setPersons(
                persons.map((person) =>
                  person.id === changedPerson.id ? changedPerson : person
                )
              );
            })
            .catch((error) => {
              showNotification(
                "error",
                setNotification,
                `'${updatedPerson.name}' ${error.response.data}`
              );
              getAll().then((persons) => setPersons(persons));
            });
        }
      } else {
        addPerson(newPerson).then((addedPerson) => {
          setPersons(persons.concat(addedPerson));
          showNotification(
            "success",
            setNotification,
            `Added '${addedPerson.name}'`
          );
        });
      }
    }

    setIsFiltered(false);
  };

  return (
    <form>
      <div>
        name:
        <input onChange={handleNameChange} value={newPerson.name} />
        <br />
        number:
        <input onChange={handleNumberChange} value={newPerson.number} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          add
        </button>
      </div>
    </form>
  );
};

const showNotification = (type, setNotification, message) => {
  if (type === "success") setNotification({ type: "success", message });
  else if (type === "error") setNotification({ type: "error", message });
  setTimeout(() => {
    setNotification(null);
  }, 5000);
};

export default NewPersonForm;
