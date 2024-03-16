import { PropTypes } from 'prop-types';

NavigationBullets.propTypes = {
  parentStyles: PropTypes.string,
  bulletsArr: PropTypes.array,
  spanStyles: PropTypes.string,
  setState: PropTypes.func,
  state: PropTypes.number,
};

function NavigationBullets({
  parentStyles,
  bulletsArr,
  spanStyles,
  setState,
  state,
}) {
  return (
    <div className={`${parentStyles ? parentStyles : ''}`}>
      {bulletsArr.map((_, index) => (
        <span
          key={index}
          className={`${
            state === index ? 'bg-thirdColor' : 'bg-white'
          } h-2.5 w-2.5 cursor-pointer hover:bg-thirdColor
          ${spanStyles ? spanStyles : ''}`}
          onClick={() => {
            setState(index);
          }}
        ></span>
      ))}
    </div>
  );
}

export default NavigationBullets;
