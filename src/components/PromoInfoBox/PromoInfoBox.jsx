// eslint-disable-next-line react/prop-types
function PromoInfoBox({ icon, header, text }) {
  return (
    <div
      className="border-2 border-fourthColor px-[5px] py-5
    text-center text-xs leading-none lg:py-[30px] lg:text-base"
    >
      <div
        className="mb-3 flex items-center justify-center text-[50px]
      text-thirdColor xxs:mb-[19px]"
      >
        {icon}
      </div>

      <h6
        className="mb-2 font-medium uppercase tracking-[1.2px] text-primaryColor
      lg:mb-3"
      >
        {header}
      </h6>

      <p className="text-secondaryColor">{text}</p>
    </div>
  );
}

export default PromoInfoBox;
