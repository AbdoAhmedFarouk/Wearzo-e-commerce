// eslint-disable-next-line react/prop-types
function ShopNowBtn({ animation, text, styles, type, onClick }) {
  const defaultStyles = `inline-block border-0 bg-primaryColor px-2 py-[5px]
  text-[8px] font-normal uppercase leading-none text-white outline-0
  duration-300 hover:bg-thirdColor xxxs:px-3 xxxs:py-[5px] xxxs:text-[10px]
  xxxs:leading-[16px] xs:px-5 xs:py-2 xs:text-xs lg:px-[30px] lg:py-2.5 lg:text-sm`;
  return (
    <button
      className={`${animation ? animation : ''} ${
        styles ? styles : defaultStyles
      }`}
      type={type ? type : 'button'}
      onClick={onClick && onClick}
    >
      {text}
    </button>
  );
}

export default ShopNowBtn;
