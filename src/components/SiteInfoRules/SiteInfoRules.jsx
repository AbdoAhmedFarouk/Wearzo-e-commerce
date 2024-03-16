import { BsTruck } from 'react-icons/bs';
import { PiLockKeyLight, PiMedalLight } from 'react-icons/pi';

function SiteInfoRules() {
  return (
    <div className="mt-[25px]">
      <div
        className="mb-4 text-center sm:mb-4 sm:flex
        sm:items-center sm:text-start"
      >
        <div
          className="m-auto mb-2 w-fit text-[35px]
          text-thirdColor sm:m-0 sm:me-[5px]"
        >
          <PiLockKeyLight />
        </div>

        <div className="text-sm">
          <h6>Security policy</h6>
          <p>(edit with the Customer Reassurance module)</p>
        </div>
      </div>

      <div
        className="mb-4 text-center sm:mb-4 sm:flex
        sm:items-center sm:text-start"
      >
        <div
          className="m-auto mb-2 w-fit text-[30px]
          text-thirdColor sm:m-0 sm:mx-[5px]"
        >
          <BsTruck />
        </div>

        <div className="text-sm">
          <h6>Security policy</h6>
          <p>(edit with the Customer Reassurance module)</p>
        </div>
      </div>

      <div
        className="mb-4 text-center sm:mb-4 sm:flex
        sm:items-center sm:text-start"
      >
        <div
          className="m-auto mb-2 w-fit text-[35px]
          text-thirdColor sm:m-0 sm:me-[5px]"
        >
          <PiMedalLight />
        </div>

        <div className="text-sm">
          <h6>Security policy</h6>

          <p>(edit with the Customer Reassurance module)</p>
        </div>
      </div>
    </div>
  );
}

export default SiteInfoRules;
