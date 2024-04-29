import { PropTypes } from 'prop-types';

const defaultStyles = `max-h-10 w-full border
border-fourthColor px-[15px] py-2.5
text-primaryColor outline-0`;

Input.propTypes = {
  styles: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  onChangeHandler: PropTypes.func,
  value: PropTypes.number,
  placeholder: PropTypes.string,
};

function Input({
  styles,
  type,
  id,
  name,
  required,
  placeholder,
  value,
  onChangeHandler,
}) {
  return (
    <input
      className={styles ? styles : defaultStyles}
      type={type ? type : 'text'}
      id={id && id}
      name={name && name}
      required={required && required}
      placeholder={placeholder && placeholder}
      value={value && value}
      onChange={onChangeHandler}
    />
  );
}

export default Input;
