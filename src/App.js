import React, { useState, useEffect } from 'react';
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';
import Filter from "./Components/Filter";

const LS_KEY = 'contacts';
const contactId = nanoid();
const numberId = nanoid();

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const filteredContacts = getFilteredContacts();

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem(LS_KEY));

    if (localStorageItems) {
      setContacts(prevState => [...prevState, ...localStorageItems]);
    }
  }, []);

  const onHandleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const contactName = event.target.elements.name.value;
    const contactPhone = event.target.elements.number.value;
    const isNameInContacts = contacts.find(
      element => element.name === contactName
    );

    if (isNameInContacts) {
      const notify = () => toast.error(`${contactName} has been added already`);

      notify();
      form.reset();
      return;
    }

    const newContacts = [
      ...contacts,
      { id: nanoid(), name: contactName, number: contactPhone },
    ];

    setContacts(newContacts);
    localStorage.setItem(LS_KEY, JSON.stringify(newContacts));
    form.reset();
  };

  const onSearchInput = event => {
    const inputValue = event.target.value;

    setFilter(inputValue);
  };

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );

    return filteredContacts;
  }

  const deleteContact = id => {
    setContacts(prevState => {
      const newContacts = prevState.filter(contact => contact.id !== id);

      if (newContacts.length === 0) {
        localStorage.removeItem(LS_KEY);
        return [];
      }

      localStorage.setItem(LS_KEY, JSON.stringify(newContacts));
      return [...newContacts];
    });
  };
   return (
      <>
        <Section title="Phonebook">
          <ContactForm contactId={contactId}
        numberId={numberId}
        handleSubmit={onHandleSubmit} />
        </Section>

        <Section title="Contacts">
          <Filter onSearchInput={onSearchInput} value={filter} />
          <ContactList
            contacts={contacts}
            filteredContacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </Section>
        <Toaster />
      </>
    );
  }


export default App;
