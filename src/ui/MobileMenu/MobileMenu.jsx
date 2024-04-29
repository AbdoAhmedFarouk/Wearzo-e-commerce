import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isMobileMenuOpened } from '../../atoms/isMobileMenuOpened';
import { isMobileBrandMenuOpened } from '../../atoms/isOpened';
import { useClickEvent } from '../../hooks/useClickEvent';
import { useIsOpen } from '../../hooks/useIsOpen';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import { AiOutlinePlus, AiOutlineClose, AiOutlineMinus } from 'react-icons/ai';

function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useRecoilState(isMobileMenuOpened);
  const [isMobileBrandMenuOpen, setIsMobileBrandMenuOpen] = useRecoilState(
    isMobileBrandMenuOpened,
  );

  const el = useRef(null);

  const handleResetMobileMenuState = () => {
    setIsMobileMenuOpen(false);
  };

  const handleOpenMobileBrandMenu = useIsOpen(
    isMobileBrandMenuOpen,
    setIsMobileBrandMenuOpen,
  );

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

                <li onClick={handleOpenMobileBrandMenu}>
                  <Link
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    to="brands"
                  >
                    all brands
                    <span className="text-lg">
                      {isMobileBrandMenuOpen ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </Link>

                  <DropdownMenu
                    isOpen={isMobileBrandMenuOpen}
                    position="static"
                    padding="px-[15px]"
                    border="border-0"
                    width="w-[342px] min-w-full"
                    fontSize="text-sm"
                    height="h-[252px]"
                  >
                    {Array.from([1, 2, 3, 4, 5, 6, 7, 8], (_, index) => (
                      <li
                        key={index}
                        className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor"
                      >
                        <Link to={`brands/brand${index + 1}`}>
                          Brand {index + 1}
                        </Link>
                      </li>
                    ))}
                  </DropdownMenu>
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
                    to="blog"
                  >
                    blog
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
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    special
                  </a>
                </li>

                <li onClick={handleOpenMobileBrandMenu}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    all brands
                    <span className="text-lg">
                      {isMobileBrandMenuOpen ? (
                        <AiOutlineMinus />
                      ) : (
                        <AiOutlinePlus />
                      )}
                    </span>
                  </a>

                  <DropdownMenu
                    isOpen={isMobileBrandMenuOpen}
                    position="static"
                    padding="px-[15px]"
                    border="border-0"
                    width="w-[342px] min-w-full"
                    fontSize="text-sm"
                    height="h-[252px]"
                  >
                    <li className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a href="#">Brand 1</a>
                    </li>

                    <li className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a href="#">Brand 1</a>
                    </li>

                    <li className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a href="#">Brand 1</a>
                    </li>

                    <li className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a href="#">Brand 1</a>
                    </li>

                    <li className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a href="#">Brand 1</a>
                    </li>

                    <li className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a href="#">Brand 1</a>
                    </li>

                    <li className="px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a href="#">Brand 1</a>
                    </li>
                  </DropdownMenu>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    about us
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    Delivery
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    blog
                  </a>
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
