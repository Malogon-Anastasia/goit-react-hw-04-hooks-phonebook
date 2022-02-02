import PropTypes from "prop-types";
// npimport ContactItem from "../ContactItem";
import { List, Button, Notification, ListItem, ContactListStyles } from "./ContactList.styled";

const ContactList = ({ contacts, filteredContacts, deleteContact }) => {
  return (
    <ContactListStyles>
      {contacts.length === 0 ? (
        <Notification>No contacts added yet</Notification>
      ) : (
        <List>
          {filteredContacts.length === 0 ? (
            <p>Contact not found</p>
          ) : (
            filteredContacts.map((contact) => (
              <ListItem key={contact.id}>
               <span>
               {contact.name}: {contact.number}
                 </span> 
              <Button onClick={() => deleteContact(contact.id)}>
                  delete
                </Button>
              </ListItem>
            ))
          )}
        </List>
      )}
    </ContactListStyles>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
