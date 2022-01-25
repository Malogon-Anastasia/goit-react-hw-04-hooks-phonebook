import PropTypes from "prop-types";
import { FilterInputStyles } from "./Filter.styled";

const Filter = ({ value, onChange }) => (
  <label>
    {" "}
    Filter contacts by name
    <FilterInputStyles
      className="input"
      type="text"
      value={value}
      name="filter"
      onChange={onChange}
    ></FilterInputStyles>
  </label>
);

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
