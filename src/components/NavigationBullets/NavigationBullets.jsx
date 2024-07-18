import { PropTypes } from 'prop-types';

NavigationBullets.propTypes = {
  parentStyles: PropTypes.string,
  bulletsArr: PropTypes.array,
  buttonStyle: PropTypes.string,
  setState: PropTypes.func,
  state: PropTypes.number,
};

function NavigationBullets({
  parentStyles,
  bulletsArr,
  buttonStyle,
  setState,
  state,
}) {
  return (
    <div className={`${parentStyles ? parentStyles : ''}`}>
      {bulletsArr.map((_, index) => (
        <button
          key={index}
          className={`${
            state === index ? 'bg-thirdColor' : 'bg-white'
          } h-2.5 w-2.5 cursor-pointer hover:bg-thirdColor
          ${buttonStyle ? buttonStyle : ''}`}
          onClick={() => {
            setState(index);
          }}
        ></button>
      ))}
    </div>
  );
}

export default NavigationBullets;
