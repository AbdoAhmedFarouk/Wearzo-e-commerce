import { PropTypes } from 'prop-types';

function ProductHoveringSubImg({ img }) {
  return (
    <div
      className="absolute -left-full top-0 z-40 h-full w-full
      duration-700 group-hover/box:left-0"
    >
      <img className="w-full" src={img} alt={img} />
    </div>
  );
}

ProductHoveringSubImg.propTypes = {
  img: PropTypes.string,
};

export default ProductHoveringSubImg;
