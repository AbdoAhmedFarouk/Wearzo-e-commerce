import { PropTypes } from 'prop-types';

StoreBox.propTypes = {
  img: PropTypes.string,
  storeName: PropTypes.string,
  streetAddress: PropTypes.string,
  cityAddress: PropTypes.string,
  countryAddress: PropTypes.string,
};

function StoreBox({
  img,
  storeName,
  streetAddress,
  cityAddress,
  countryAddress,
}) {
  return (
    <div
      className="grid w-full grid-cols-1 items-center gap-2 border
      border-fourthColor p-2 text-center text-sm xxxs:gap-5 xxxs:p-[30px]
      sm:grid-cols-12 sm:text-left"
    >
      <div className="flex flex-col items-center sm:col-span-8 md:flex-row">
        <div className="mb-8 hidden sm:block md:mb-0 md:me-8">
          <img className="max-w-full" src={img} alt={img} />
        </div>

        <div>
          <p className="mb-5 font-medium">{storeName}</p>

          <address>
            {streetAddress} <br />
            {cityAddress} <br />
            {countryAddress}
          </address>
        </div>
      </div>

      <div
        className="ps-[15px] sm:col-span-4 sm:border-s
        sm:border-fourthColor"
      >
        <div>
          <span className="me-1 font-bold">Mon.</span>

          <span className="text-[15px]">09:00AM - 07:00PM</span>
        </div>

        <div>
          <span className="me-1 font-bold">Tue.</span>

          <span className="text-[15px]">09:00AM - 07:00PM</span>
        </div>

        <div>
          <span className="me-1 font-bold">Wed.</span>

          <span className="text-[15px]">09:00AM - 07:00PM</span>
        </div>

        <div>
          <span className="me-1 font-bold">Thu.</span>

          <span className="text-[15px]">09:00AM - 07:00PM</span>
        </div>

        <div>
          <span className="me-1 font-bold">Fri.</span>

          <span className="text-[15px]">09:00AM - 07:00PM</span>
        </div>

        <div>
          <span className="me-1 font-bold">Sat.</span>

          <span className="text-[15px]">10:00AM - 04:00PM</span>
        </div>

        <div>
          <span className="me-1 font-bold">Sun.</span>

          <span className="text-[15px]">10:00AM - 04:00PM</span>
        </div>
      </div>
    </div>
  );
}

export default StoreBox;
