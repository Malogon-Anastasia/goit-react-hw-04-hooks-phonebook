import { Component } from "react";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactList from "./Components/ContactList";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = (data) => {
    const { name, number } = data;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const alreadyExistingName = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    alreadyExistingName
      ? alert(`${name} is already in contacts.`)
      : this.setState((prevState) => {
          return {
            contacts: [contact, ...prevState.contacts],
          };
        });
  };

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.getVisibleContacts()}
            deleteHandler={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
