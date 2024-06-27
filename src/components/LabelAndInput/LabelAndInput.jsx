import { PropTypes } from 'prop-types';

import Input from '../Input/Input';

LabelAndInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  divStyles: PropTypes.string,
  lableStyles: PropTypes.string,
  inputStyles: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  refEl: PropTypes.object,
  minLength: PropTypes.any,
  pattern: PropTypes.string,
};

function LabelAndInput({
  id,
  name,
  type,
  htmlFor,
  required,
  value,
  placeholder,
  onChangeHandler,
  refEl,
  inputStyles,
  labelText,
  divStyles,
  lableStyles,
  minLength,
  pattern,
}) {
  return (
    <div
      className={`${divStyles ? divStyles : ''} grid grid-cols-1 items-center`}
    >
      <label
        className={`${lableStyles ? lableStyles : ''} capitalize`}
        htmlFor={`${htmlFor ? htmlFor : ''}`}
      >
        {labelText}
      </label>

      <Input
        styles={inputStyles}
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        refEl={refEl}
        onChangeHandler={onChangeHandler}
        minLength={minLength}
        pattern={pattern}
      />
    </div>
  );
}

export default LabelAndInput;
