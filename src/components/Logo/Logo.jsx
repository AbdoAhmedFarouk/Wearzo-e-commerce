

// eslint-disable-next-line react/prop-types
function Logo({ img }) {
  return (
    <a href="#">
      <img
        className="w-[100px] xs:w-[120px] sm:w-[130px] lg:w-[150px] 2xl:w-[203.33px]"
        src={img}
        alt="img"
      />
    </a>
  );
}

export default Logo;
