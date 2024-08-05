import { PropTypes } from 'prop-types';

Input.propTypes = {
  styles: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  refEl: PropTypes.object,
  minLength: PropTypes.any,
  pattern: PropTypes.string,
};

const defaultStyles = `text-sm outline-0 placeholder:capitalize
w-full`;

function Input({
  id,
  name,
  type,
  onChangeHandler,
  required,
  styles,
  value,
  placeholder,
  refEl,
  pattern,
  readOnly,
  minLength,
}) {
  return (
    <input
      className={`${styles ? styles : ''} ${defaultStyles}`}
      type={type ? type : 'text'}
      id={id && id}
      name={name && name}
      required={required && required}
      placeholder={placeholder ? placeholder : ''}
      value={value && value}
      onChange={onChangeHandler}
      minLength={minLength && minLength}
      ref={refEl && refEl}
      pattern={pattern && pattern}
      readOnly={readOnly ? readOnly : false}
    />
  );
}

export default Input;
