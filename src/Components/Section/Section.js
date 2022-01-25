import PropTypes from "prop-types";
import { SectionStyles, SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => (
  <SectionStyles>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionStyles>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
