import { PropTypes } from 'prop-types';

function PromoBannerBox({ children, mainImg, width, parentStyles }) {
  return (
    <div className={`relative ${parentStyles ? parentStyles : ''}`}>
      <div className={`box-hovering-effect ${width ? width : ''}`}>
        {mainImg}
      </div>

      {children}
    </div>
  );
}

PromoBannerBox.propTypes = {
  children: PropTypes.node,
  mainImg: PropTypes.object,
  width: PropTypes.string,
  parentStyles: PropTypes.string,
};

export default PromoBannerBox;
