import { PropTypes } from 'prop-types';

CustomRadioBtn.propTypes = {
  parentStyles: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  labelsStyles: PropTypes.string,
  htmlFor: PropTypes.string,
  labelText: PropTypes.string,
  refEl: PropTypes.object,
  required: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  checked: PropTypes.bool,
};

function CustomRadioBtn({
  parentStyles,
  id,
  name,
  labelsStyles,
  htmlFor,
  labelText,
  onChangeHandler,
  checked,
  refEl,
  required,
}) {
  return (
    <div className={parentStyles && parentStyles}>
      <input
        id={id && id}
        name={name && name}
        type="radio"
        onChange={onChangeHandler}
        checked={checked}
        required={required}
        ref={refEl}
      />

      <label
        className={`custom-radio-label
        ${labelsStyles ? labelsStyles : ''}`}
        htmlFor={`${htmlFor ? htmlFor : ''}`}
      >
        {labelText}
      </label>
    </div>
  );
}

export default CustomRadioBtn;
