// eslint-disable-next-line react/prop-types
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

export default PromoBannerBox;
