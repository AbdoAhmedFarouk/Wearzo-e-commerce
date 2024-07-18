import { PropTypes } from 'prop-types';

TooltipButton.propTypes = {
  onClickHandler: PropTypes.func,
  children: PropTypes.node,
  buttonStyle: PropTypes.string,
};

function TooltipButton({ onClickHandler, children, buttonStyle }) {
  return (
    <button className={buttonStyle} onClick={onClickHandler && onClickHandler}>
      {children}
    </button>
  );
}

export default TooltipButton;
