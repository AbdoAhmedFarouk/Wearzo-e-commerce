import { PropTypes } from 'prop-types';

ErrorMessage.propTypes = {
  msg: PropTypes.string,
};

function ErrorMessage({ msg }) {
  return (
    <div className="text-center text-2xl font-medium">
      Oops...! It&apos;s look like you have a {msg?.toLowerCase()}
    </div>
  );
}

export default ErrorMessage;
