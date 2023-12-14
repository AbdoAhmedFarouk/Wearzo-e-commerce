import { useRef } from 'react';
import { useRecoilState } from 'recoil';
import { isAsideMobileOpen } from '../../atoms/aside';
import {
  isCategoriesMenuOpen,
  isBrandMenuOpen,
  isShopMenuOpen,
  isCollectionMenuOpen,
} from '../../atoms/isOpen';
import { useKey } from '../../hooks/useKey';
import { useIsOpen } from '../../hooks/useIsOpen';

import DropdownMenu from '../DropdownMenu/DropdownMenu';

import { AiOutlinePlus, AiOutlineClose, AiOutlineMinus } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

function MobileMenu() {
  const [isOpen, setIsOpen] = useRecoilState(isAsideMobileOpen);
  const [isOpen1, setIsOpen1] = useRecoilState(isBrandMenuOpen);
  const [isOpen2, setIsOpen2] = useRecoilState(isShopMenuOpen);
  const [isOpen3, setIsOpen3] = useRecoilState(isCollectionMenuOpen);
  const [isOpen4, setIsOpen4] = useRecoilState(isCategoriesMenuOpen);

  const el = useRef(null);

  const toggleMobileMenuFn = useIsOpen(isOpen, setIsOpen);
  const openBrandMenu = useIsOpen(isOpen1, setIsOpen1);
  const openShopMenu = useIsOpen(isOpen2, setIsOpen2);
  const openCollectionMenuFn = useIsOpen(isOpen3, setIsOpen3);
  const openCategoriesMenuFn = useIsOpen(isOpen4, setIsOpen4);

  useKey(el, toggleMobileMenuFn);

  return (
    <>
      {isOpen ? (
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
                onClick={toggleMobileMenuFn}
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

                <li onClick={openBrandMenu}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    all brands
                    <span className="text-lg">
                      {isOpen1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  </a>

                  <DropdownMenu
                    isOpen={isOpen1}
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

                <li onClick={openShopMenu}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    shop
                    <span className="text-lg">
                      {isOpen2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  </a>
                  <DropdownMenu
                    isOpen={isOpen2}
                    position="static"
                    padding="px-[15px]"
                    border="border-0"
                    width="w-[342px] min-w-full"
                    fontSize="text-sm"
                    height="h-[108px]"
                  >
                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        western
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        Traditional
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        Party wear
                      </a>
                    </li>
                  </DropdownMenu>
                </li>

                <li onClick={openCollectionMenuFn}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    collection
                    <span className="text-lg">
                      {isOpen3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  </a>

                  <DropdownMenu
                    isOpen={isOpen3}
                    position="static"
                    padding="px-[15px]"
                    border="border-0"
                    width="w-[342px] min-w-full"
                    fontSize="text-sm"
                    height="h-[180px]"
                  >
                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        printed kurta
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        floral kurta
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        checkered trouser
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        loose trousers
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        sports tights
                      </a>
                    </li>
                  </DropdownMenu>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    fashion
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    trousers
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    tops
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    tights
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    dresses
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    pants
                  </a>
                </li>

                <li
                  className={`${
                    !isOpen4
                      ? 'invisible h-0 overflow-hidden opacity-0 duration-500'
                      : 'visible h-9 overflow-hidden opacity-100 duration-500 '
                  }`}
                >
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    winter outfits
                  </a>
                </li>

                <li
                  className={`${
                    !isOpen4
                      ? 'invisible h-0 overflow-hidden opacity-0 duration-500'
                      : 'visible h-9 overflow-hidden opacity-100 duration-500'
                  }`}
                >
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    casual
                  </a>
                </li>

                <li className="cursor-pointer" onClick={openCategoriesMenuFn}>
                  <span
                    className="flex items-center justify-between px-5
                  py-1.5 hover:text-primaryColor sm:py-2"
                  >
                    {isOpen4 ? 'less' : 'more'} categories
                    <span className={`text-lg ${isOpen4 && 'rotate-180'}`}>
                      <MdKeyboardArrowDown />
                    </span>
                  </span>
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
                onClick={toggleMobileMenuFn}
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

                <li onClick={openBrandMenu}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    all brands
                    <span className="text-lg">
                      {isOpen1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  </a>

                  <DropdownMenu
                    isOpen={isOpen1}
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

                <li onClick={openShopMenu}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    shop
                    <span className="text-lg">
                      {isOpen2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  </a>
                  <DropdownMenu
                    isOpen={isOpen2}
                    position="static"
                    padding="px-[15px]"
                    border="border-0"
                    width="w-[342px] min-w-full"
                    fontSize="text-sm"
                    height="h-[108px]"
                  >
                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        western
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        Traditional
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        Party wear
                      </a>
                    </li>
                  </DropdownMenu>
                </li>

                <li onClick={openCollectionMenuFn}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    collection
                    <span className="text-lg">
                      {isOpen3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                  </a>

                  <DropdownMenu
                    isOpen={isOpen3}
                    position="static"
                    padding="px-[15px]"
                    border="border-0"
                    width="w-[342px] min-w-full"
                    fontSize="text-sm"
                    height="h-[180px]"
                  >
                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        printed kurta
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        floral kurta
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        checkered trouser
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        loose trousers
                      </a>
                    </li>

                    <li className=" px-[15px] py-2 hover:cursor-pointer hover:text-primaryColor">
                      <a className="flex items-center justify-between" href="#">
                        sports tights
                      </a>
                    </li>
                  </DropdownMenu>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    fashion
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    trousers
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    tops
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    tights
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    dresses
                  </a>
                </li>

                <li>
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    pants
                  </a>
                </li>

                <li
                  className={`${
                    !isOpen4
                      ? 'invisible h-0 overflow-hidden opacity-0 duration-500'
                      : 'visible h-9 overflow-hidden opacity-100 duration-500 '
                  }`}
                >
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    winter outfits
                  </a>
                </li>

                <li
                  className={`${
                    !isOpen4
                      ? 'invisible h-0 overflow-hidden opacity-0 duration-500'
                      : 'visible h-9 overflow-hidden opacity-100 duration-500'
                  }`}
                >
                  <a
                    className="block px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    casual
                  </a>
                </li>

                <li onClick={openCategoriesMenuFn}>
                  <a
                    className="flex items-center justify-between px-5 py-1.5 hover:text-primaryColor sm:py-2"
                    href="#"
                  >
                    {isOpen4 ? 'less' : 'more'} categories
                    <span className={`text-lg ${isOpen4 && 'rotate-180'}`}>
                      <MdKeyboardArrowDown />
                    </span>
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
