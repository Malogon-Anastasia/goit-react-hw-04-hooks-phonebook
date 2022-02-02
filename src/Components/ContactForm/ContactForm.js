// import { v4 as uuidv4 } from "uuid";
import React from "react";
import PropTypes from "prop-types";
import { InputStyles, ButtonContactForm } from "./ContactForm.styled";
  const ContactForm = ({ handleSubmit, contactId, numberId }) => {
      return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={contactId}>
          <span>Name</span>
          <InputStyles
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
          />
        </label>
        <label htmlFor={numberId}>
          <span>Number</span>
          <InputStyles
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <ButtonContactForm type="submit"> Add contact</ButtonContactForm>
      </form>
    );
  }

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
