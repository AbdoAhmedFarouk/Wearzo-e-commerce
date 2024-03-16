import { useRef } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  isCurrencyMenuOpen,
  isLanguageMenuOpen,
  isLoginMenuOpen,
  isCartMenuOpen,
} from '../../atoms/isOpen';
import { useClickOutSide } from '../../hooks/useClickOutside';

import DropdownMenu from '../../ui/DropdownMenu/DropdownMenu';

import { MdKeyboardArrowDown } from 'react-icons/md';

function TopNavbar() {
  const [isOpen, setIsOpen] = useRecoilState(isCurrencyMenuOpen);
  const [isOpen1, setIsOpen1] = useRecoilState(isLanguageMenuOpen);

  const setter = useResetRecoilState(isLoginMenuOpen);
  const setter1 = useResetRecoilState(isCartMenuOpen);

  const currencyEl = useRef(null);
  const lagnEl = useRef(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
    setter();
    setter1();
  };

  const handleOpen1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false);
    setter();
    setter1();
  };

  const setterFunction1 = () => {
    setIsOpen(false);
  };

  const setterFunction2 = () => {
    setIsOpen1(false);
  };

  useClickOutSide(currencyEl, setterFunction1);
  useClickOutSide(lagnEl, setterFunction2);

  return (
    <nav
      className="bg-primaryColor py-2 text-white xs:py-[10px]
      md:py-[15px]"
    >
      <div
        className="my-container flex items-center justify-center
        text-sm sm:justify-between"
      >
        <div className="hidden sm:block">
          <span>Contact us 24/7: +02 010 940 13777</span>
        </div>
        <div className="hidden uppercase md:block">
          Free shipping for order over $150!
        </div>

        <div className="flex items-center gap-6">
          <div className="group relative" onClick={handleOpen} ref={currencyEl}>
            <span
              className={`relative flex cursor-pointer items-center gap-[5px]
              before:absolute before:-right-[10px] before:top-0 before:h-5
              before:w-[1px] before:bg-fourthColor before:opacity-10
              hover:text-thirdColor ${isOpen ? 'text-thirdColor' : ''}`}
            >
              Currency: EUR <MdKeyboardArrowDown />
            </span>

            <DropdownMenu
              isOpen={isOpen}
              xDirection="right-0"
              yDirection="xxxxs:top-[26px] top-[46px] xs:top-7 md:top-[34px]"
              height="h-[71.6px]"
              width="w-full xxxs:min-w-[160px]"
              shadow="shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
            >
              <li className="cursor-pointer px-[15px] hover:text-primaryColor">
                <a className="flex py-[5px]" href="#">
                  € EUR
                </a>
              </li>
              <li className="cursor-pointer px-[15px] hover:text-primaryColor">
                <a className="flex py-[5px]" href="#">
                  $ USD
                </a>
              </li>
            </DropdownMenu>
          </div>

          <div className="relative" onClick={handleOpen1} ref={lagnEl}>
            <span
              className={`flex cursor-pointer items-center gap-[5px]
              hover:text-thirdColor ${isOpen1 ? 'text-thirdColor' : ''}`}
            >
              Language: English <MdKeyboardArrowDown />
            </span>

            <DropdownMenu
              isOpen={isOpen1}
              xDirection="left-auto"
              yDirection="xxxxs:top-[26px] top-[46px] xs:top-7 md:top-[34px]"
              height="h-[41.6px]"
              width="w-full xxxs:min-w-[160px]  sm:min-w-[148px] xl:min-w-[160px]"
              shadow="shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
            >
              <li className="cursor-pointer px-[15px] hover:text-primaryColor">
                <a className="flex items-center py-[5px]" href="#">
                  Arabic
                </a>
              </li>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
