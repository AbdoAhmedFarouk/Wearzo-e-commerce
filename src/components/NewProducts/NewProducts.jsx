import HeaderWithArrows from '../HeaderWithArrows/HeaderWithArrows';
import ProductBox from '../ProductBox/ProductBox';

// eslint-disable-next-line react/prop-types
function NewProducts({ header }) {
  return (
    <div>
      {/* <div className="flex justify-between">
        <h3 className="mb-[26px] text-3xl font-medium uppercase leading-none text-primaryColor">
          {header}
        </h3>
        <div className="flex h-fit text-2xl text-primaryColor duration-300 ease-in-out">
          <span className="cursor-pointer">
            <MdOutlineKeyboardArrowLeft />
          </span>
          <span className="ms-2 cursor-pointer">
            <MdOutlineKeyboardArrowRight />
          </span>
        </div>
      </div> */}

      <HeaderWithArrows header={header} />

      <div
        className="grid grid-cols-1 gap-2.5 xxs:grid-cols-2
        sm:grid-cols-3 sm:gap-[15px] md:gap-[30px] md:gap-y-5
        2xl:grid-cols-4"
      >
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        {/* <ProductBox />
        <ProductBox /> */}
      </div>
    </div>
  );
}

export default NewProducts;
