import { PropTypes } from 'prop-types';

function MainWrapper({ children }) {
  return <main>{children}</main>;
}

MainWrapper.propTypes = {
  children: PropTypes.node,
};

export default MainWrapper;
