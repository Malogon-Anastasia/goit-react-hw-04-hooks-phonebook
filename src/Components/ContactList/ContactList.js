import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import { ContactListItemStyles, ContactListStyles } from "./ContactList.styled";

const ContactList = ({ contacts, deleteHandler }) => (
  <ContactListStyles>
    {contacts.map((contact) => (
      <ContactListItemStyles key={contact.id}>
        <ContactItem
          name={contact.name}
          number={contact.number}
          id={contact.id}
          deleteHandler={deleteHandler}
        />
      </ContactListItemStyles>
    ))}
  </ContactListStyles>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default ContactList;
