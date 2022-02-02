import React, { useState, useEffect } from 'react';
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Components/Filter";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      setContacts(prevState => [...prevState, ...parsedContacts]);
    }

  }, []);

 
  const formSubmitHandler = (data) => {
    const { name, number } = data;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const alreadyExistingName = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    alreadyExistingName
      ? alert(`${name} is already in contacts.`)
      : setContacts((prevState) => {
          return {
            contacts: [contact, ...prevState.contacts],
          };
        });
  };

  const changeFilter = (event) => {
    const inputValue = event.target.value;
    setFilter(inputValue);
  };

 const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(normalizedFilter)
    )
   return filteredContacts  };

  const deleteContact = (id) => {
    setContacts((prevState) => {
      const newContacts = prevState.filter((contact) => contact.id !== id);
      if (newContacts.length === 0) {
        localStorage.removeItem("contacts");
        return [];
      }

      localStorage.setItem("contacts", JSON.stringify(newContacts));
      return [...newContacts];
    });
  };

   return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={contacts}
            deleteHandler={deleteContact}
            filteredContacts={getVisibleContacts}
          />
        </Section>
      </>
    );
  }


export default App;
