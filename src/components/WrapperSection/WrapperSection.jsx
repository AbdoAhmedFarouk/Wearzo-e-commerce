import { PropTypes } from 'prop-types';

import Container from '../Container/Container';
import SectionTag from '../SectionTag/SectionTag';

function WrapperSection({ children, containerStyles, sectionStyles }) {
  return (
    <SectionTag styles={sectionStyles}>
      <Container styles={containerStyles}>{children}</Container>
    </SectionTag>
  );
}

WrapperSection.propTypes = {
  children: PropTypes.node,
  containerStyles: PropTypes.string,
  sectionStyles: PropTypes.string,
};

export default WrapperSection;
