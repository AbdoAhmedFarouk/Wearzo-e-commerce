import Container from '../Container/Container';
import SectionTag from '../SectionTag/SectionTag';

// eslint-disable-next-line react/prop-types
function WrapperSection({ children, containerStyles, sectionStyles }) {
  return (
    <SectionTag styles={sectionStyles}>
      <Container styles={containerStyles}>{children}</Container>
    </SectionTag>
  );
}

export default WrapperSection;
