import PropTypes from "prop-types";
import { ContactButton } from "./ContactItem.styled";

const ContactItem = ({ name, number, id, deleteHandler }) => (
  <>
    <span>
      {name} : {number}
    </span>
    <ContactButton
      onClick={() => deleteHandler(id)}
      type="button"
      className="button"
    >
      Delete
    </ContactButton>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default ContactItem;
