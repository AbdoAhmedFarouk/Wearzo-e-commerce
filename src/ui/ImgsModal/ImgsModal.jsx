import { MdClose } from 'react-icons/md';

import { PropTypes } from 'prop-types';

ImgsModal.propTypes = {
  isModalOpen: PropTypes.bool,
  overlayEl: PropTypes.any,
  imgSrc: PropTypes.string,
};

function ImgsModal({ isModalOpen, overlayEl, imgSrc }) {
  return (
    <>
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 z-[10000] bg-black opacity-80"
            ref={overlayEl}
          ></div>

          <div
            className="fixed left-1/2 top-1/2 z-[15000]
              w-[90%] max-w-[700px] -translate-x-1/2
              -translate-y-1/2 bg-white p-[15px] text-center
              text-white opacity-100 sm:p-[30px]"
          >
            <h3
              className="mb-[5px] text-sm font-semibold uppercase text-primaryColor
                xs:mb-2.5 xs:text-lg sm:mb-4 sm:text-2xl"
            >
              SUMMER COLLECTION ON SALE NOW
            </h3>

            <div className="h-[340px] bg-cover bg-center bg-no-repeat">
              <img
                className="h-full w-full object-cover"
                src={imgSrc}
                alt={imgSrc}
              />
            </div>

            <div
              className="absolute right-0 top-0 flex h-4 w-4
                cursor-pointer items-center justify-center bg-thirdColor
                text-center text-base duration-300 hover:bg-primaryColor xxxs:h-6
                xxxs:w-6 xxxs:text-2xl xxxs:leading-6
                md:h-[30px] md:w-[30px] md:text-3xl"
              //   onClick={handleOpenModal}
            >
              <MdClose />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ImgsModal;
