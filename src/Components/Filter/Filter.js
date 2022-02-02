import PropTypes from "prop-types";
import { FilterInputStyles } from "./Filter.styled";

const Filter = ({ value, onSearchInput }) => (
  <label>
    {" "}
    Filter contacts by name
    <FilterInputStyles
      type="text"
      value={value}
      name="filter"
      onChange={onSearchInput}
    ></FilterInputStyles>
  </label>
);

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  onSearchInput: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Filter;
