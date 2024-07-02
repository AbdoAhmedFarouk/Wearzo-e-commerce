import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRecoilState } from 'recoil';
import { isModalOpened } from '../../atoms/isModalOpened';
import { isModalCheckboxChecked } from '../../atoms/isModalCheckboxChecked';

import { useIsOpen } from '../../hooks/useIsOpen';
import { useClickEvent } from '../../hooks/useClickEvent';
import { useKeyEvent } from '../../hooks/useKeyEvent';

import newletter from '../../assets/newletter_popup.jpg';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import Input from '../../components/Input/Input';

import { MdClose } from 'react-icons/md';

const Overlay = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(isModalOpened);
  const [isModalChecked, setIsModalChecked] = useRecoilState(
    isModalCheckboxChecked,
  );

  const overlayEl = useRef(null);

  const handleToggleModal = useIsOpen(isModalOpen, setIsModalOpen);

  const handleIsCheckedChange = (e) => {
    setIsModalChecked(e.target.checked);
  };

  useEffect(() => {
    setIsModalOpen(true);

    if (localStorage.getItem('isModalCheckboxChecked') === 'true')
      setIsModalOpen(false);
  }, [setIsModalOpen]);

  useClickEvent(overlayEl, handleToggleModal);

  useKeyEvent('Escape', function () {
    setIsModalOpen(false);
  });

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
                src={newletter}
                alt="newletter"
              />
            </div>

            <div className="p-[5px] pt-5 xxs:p-5 xxs:pb-0 sm:p-7 sm:pb-0">
              <p
                className="mb-[14px] text-sm text-secondaryColor
                xs:text-base sm:mb-[22px] sm:text-lg"
              >
                Want to be notified of our sales? Sign up for the newsletter
                below!
              </p>

              <Input
                styles="bg-fifthColor p-[10px]
                text-center font-normal text-primaryColor
                placeholder:text-xs xs:placeholder:text-sm"
                type="email"
                placeholder="Enter Your Email Address Here"
                id="modalEmailInp"
              />

              <ShopNowBtn
                text="subscribe"
                styles="mt-[15px] md:mt-5 inline-block cursor-pointer border-0
                bg-primaryColor md:px-[30px] md:py-[10px] text-sm py-[7px] px-5
                font-normal uppercase outline-0 duration-300 hover:bg-thirdColor"
              />
            </div>

            <div className="mt-2 flex items-center justify-center sm:mt-5">
              <input
                type="checkbox"
                id="checkboxInp"
                onChange={handleIsCheckedChange}
                checked={isModalChecked}
              />

              <label
                className="ps-2 text-sm text-primaryColor"
                htmlFor="checkboxInp"
              >
                Don&apos;t show this popup again!
              </label>
            </div>

            <div
              className="absolute right-0 top-0 flex h-4 w-4 cursor-pointer items-center
              justify-center bg-thirdColor text-center text-base duration-300
              hover:bg-primaryColor xxxs:h-6 xxxs:w-6 xxxs:text-2xl xxxs:leading-6
              md:h-[30px] md:w-[30px] md:text-3xl"
              title="Close (Esc)"
              onClick={handleToggleModal}
            >
              <MdClose />
            </div>
          </div>
        </>
      )}
    </>
  );
};

function Modal() {
  return <>{createPortal(<Overlay />, document.getElementById('modal'))}</>;
}

export default Modal;
