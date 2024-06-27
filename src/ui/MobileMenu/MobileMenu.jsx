import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isMobileMenuOpened } from '../../atoms/isMobileMenuOpened';
import { useClickEvent } from '../../hooks/useClickEvent';

import { AiOutlineClose } from 'react-icons/ai';

function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useRecoilState(isMobileMenuOpened);

  const el = useRef(null);

  const handleResetMobileMenuState = () => {
    setIsMobileMenuOpen(false);
  };

  useClickEvent(el, handleResetMobileMenuState);

  return (
    <>
      {isMobileMenuOpen ? (
        <>
          <div
            ref={el}
            className="fixed inset-0 z-[49000] bg-black opacity-50"
          ></div>

          <div
            className="fixed left-0 top-0 z-[50000] h-full 
            w-full max-w-[350px] translate-x-0 overflow-y-scroll
            bg-white duration-500"
          >
            <div
              className="flex items-center justify-between bg-primaryColor
              px-[15px] uppercase text-white"
            >
              <span className="text-base font-medium leading-10">Menu</span>

              <span
                className="cursor-pointer text-2xl font-normal hover:text-thirdColor"
                onClick={handleResetMobileMenuState}
              >
                <AiOutlineClose />
              </span>
            </div>

            <div
              className="p-1 py-2 text-base font-medium capitalize
              text-secondaryColor"
            >
              <ul>
                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="specials"
                  >
                    specials
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="stores"
                  >
                    stores
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="aboutUs"
                  >
                    about us
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="delivery"
                  >
                    Delivery
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="blogs"
                  >
                    blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            ref={el}
            className="fixed inset-0 z-[49000] hidden bg-black opacity-50"
          ></div>

          <div
            className="fixed left-0 top-0 z-[50000] h-full 
            w-full max-w-[350px] -translate-x-[400px] overflow-y-scroll
            bg-white duration-500"
          >
            <div
              className="flex items-center justify-between bg-primaryColor
              px-[15px] uppercase text-white"
            >
              <span className="text-base font-medium leading-10">Menu</span>

              <span
                className="text-2xl font-normal"
                onClick={handleResetMobileMenuState}
              >
                <AiOutlineClose />
              </span>
            </div>

            <div className="p-1 py-2 text-base font-medium capitalize text-secondaryColor">
              <ul>
                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="specials"
                  >
                    special
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="stores"
                  >
                    stores
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="aboutUs"
                  >
                    about us
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="delivery"
                  >
                    Delivery
                  </Link>
                </li>

                <li>
                  <Link
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="blogs"
                  >
                    blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MobileMenu;
