import { PropTypes } from 'prop-types';

function H2Header({ header }) {
  return (
    <div className="mb-2.5 md:mb-[26px]">
      <h2
        className="text-base font-medium
        uppercase text-primaryColor md:text-2xl
        md:leading-none xl:text-3xl xl:leading-none"
      >
        {header}
      </h2>
    </div>
  );
}

H2Header.propTypes = {
  header: PropTypes.string,
};

export default H2Header;
