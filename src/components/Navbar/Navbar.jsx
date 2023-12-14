import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  isCurrencyMenuOpen,
  isLanguageMenuOpen,
  isLoginMenuOpen,
  isCartMenuOpen,
} from '../../atoms/isOpen';
import { isAsideMobileOpen } from '../../atoms/aside';
import { isSearchBarOpen } from '../../atoms/isModalOpen';
import { useKey } from '../../hooks/useKey';
import { useIsOpen } from '../../hooks/useIsOpen';

import DropdownMenu from '../../ui/DropdownMenu/DropdownMenu';
import SearchField from '../../ui/SearchField/SearchField';
import HoveringMenu from '../../ui/HoveringMenu/HoveringMenu';
import navLogo from '../../assets/logo.jpg';

import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineShoppingBag, HiMiniBars3 } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Logo from '../Logo/Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useRecoilState(isLoginMenuOpen);
  const [isOpen1, setIsOpen1] = useRecoilState(isCartMenuOpen);
  const [isOpen2, setIsOpen2] = useRecoilState(isAsideMobileOpen);
  const [isOpen3, setIsOpen3] = useRecoilState(isSearchBarOpen);

  const cartSetterFn = useIsOpen(isOpen2, setIsOpen2);
  const searchSetterFn = useIsOpen(isOpen3, setIsOpen3);

  const el = useRef(null);
  // const { brandId } = useParams();

  const setter = useResetRecoilState(isCurrencyMenuOpen);
  const setter1 = useResetRecoilState(isLanguageMenuOpen);
  const setter2 = useResetRecoilState(isSearchBarOpen);

  const handleOpenLoginMenu = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
    setter();
    setter1();
  };

  const handleOpenCartMenu = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false);
    setter();
    setter1();
  };

  const setterFunction = () => {
    setter2();
  };

  useKey(el, setterFunction);

  // console.log(brandId);

  // if (brandId === 'String') {
  //   return <h1>error</h1>;
  // }

  return (
    <nav className="relative text-primaryColor shadow-[0_1px_3px_rgba(0,0,0,0.11)]">
      <div className="my-container flex items-center justify-between">
        <div>
          <Logo img={navLogo} />
        </div>

        <div className="hidden flex-1 ps-4 md:flex">
          <ul
            className="flex items-center gap-5 text-sm font-medium
            uppercase md:ms-4 lg:ms-6 2xl:ms-4 2xl:gap-8"
          >
            <li
              className="cursor-pointer leading-[90px] hover:text-thirdColor
              2xl:leading-[110px]"
            >
              <NavLink to="/">Home</NavLink>
            </li>

            <li
              className="cursor-pointer leading-[90px] hover:text-thirdColor
              2xl:leading-[110px]"
            >
              <NavLink to="special">special</NavLink>
            </li>

            <li
              className="group relative cursor-pointer leading-[90px]
              hover:text-thirdColor 2xl:leading-[110px]"
            >
              <NavLink to="brands">all brands</NavLink>

              <HoveringMenu
                top="top-36"
                zIndex="z-[1000]"
                width="w-[230px]"
                border="border-t-2 border-thirdColor"
                shadow="shadow-[0_1px_5px_rgba(0,0,0,0.11)]"
                onHover="group-hover:top-[88px]  group-hover:2xl:top-[108px]"
                transition="transition-all"
                padding="px-5 py-4"
                font="text-sm normal-case"
                cursor="cursor-default"
              >
                <ul className="flex flex-col gap-y-3 text-secondaryColor">
                  {Array.from([1, 2, 3, 4, 5, 6, 7, 8], (_, index) => (
                    <li
                      key={index}
                      className="hover:cursor-pointer hover:text-primaryColor"
                    >
                      <NavLink to={`brands/brand${index + 1}`}>
                        Brand {index + 1}
                      </NavLink>
                    </li>
                  ))}
                  {/* <li className="hover:cursor-pointer hover:text-primaryColor">
                    <NavLink to={`brands/${id.brand}`}>Brand 1</NavLink>
                  </li>
                  <li className="hover:cursor-pointer hover:text-primaryColor">
                    <a href="#">Brand 1</a>
                  </li>
                  <li className="hover:cursor-pointer hover:text-primaryColor">
                    <a href="#">Brand 1</a>
                  </li>
                  <li className="hover:cursor-pointer hover:text-primaryColor">
                    <a href="#">Brand 1</a>
                  </li>
                  <li className="hover:cursor-pointer hover:text-primaryColor">
                    <a href="#">Brand 1</a>
                  </li>
                  <li className="hover:cursor-pointer hover:text-primaryColor">
                    <a href="#">Brand 1</a>
                  </li>
                  <li className="hover:cursor-pointer hover:text-primaryColor">
                    <a href="#">Brand 1</a>
                  </li> */}
                </ul>
              </HoveringMenu>
            </li>

            <li className="cursor-pointer leading-[90px] hover:text-thirdColor 2xl:leading-[110px]">
              <NavLink to="aboutUs">about us</NavLink>
            </li>

            <li className="cursor-pointer leading-[90px] hover:text-thirdColor 2xl:leading-[110px]">
              <NavLink to="delivery">Delivery</NavLink>
            </li>

            <li className="cursor-pointer leading-[90px] hover:text-thirdColor 2xl:leading-[110px]">
              <NavLink to="blog">blog</NavLink>
            </li>
          </ul>
        </div>

        <div
          className="flex gap-3 p-[17px] pr-0 text-xl text-primaryColor
          xxxs:text-2xl xxs:p-[17px] sm:gap-5
          md:gap-7 md:p-0 "
        >
          <div
            className="cursor-pointer hover:text-thirdColor"
            onClick={searchSetterFn}
          >
            <IoIosSearch />
          </div>

          <div
            className="relative cursor-pointer hover:text-thirdColor"
            onClick={handleOpenLoginMenu}
          >
            <AiOutlineUser />
            <DropdownMenu
              isOpen={isOpen}
              fontSize="text-sm"
              xDirection="right-0"
              yDirection="2xl:top-[65.5px] xxxs:top-10 top-9 md:top-[55px]"
              height="h-[59.6px]"
              width="w-28 xxxs:min-w-[160px]"
              shadow="shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
            >
              <li className="cursor-pointer px-[15px] leading-none hover:text-primaryColor">
                <NavLink className="flex py-[5px]" to="signin">
                  Sign in
                </NavLink>
              </li>
              <li className="cursor-pointer px-[15px] leading-none hover:text-primaryColor">
                <NavLink className="flex py-[5px]" to="signup">
                  Register
                </NavLink>
              </li>
            </DropdownMenu>
          </div>

          <div className="relative" onClick={handleOpenCartMenu}>
            <div className="flex cursor-pointer items-center hover:text-thirdColor">
              <HiOutlineShoppingBag />
              <span className="ms-2 mt-1 hidden items-center text-sm uppercase md:flex">
                0 item(s){' '}
                <span className="text-xl">
                  <MdKeyboardArrowDown />
                </span>
              </span>
            </div>
            {isOpen1 ? (
              <div
                className="visible absolute right-0 top-9 z-[999] h-[61.6px] w-[220px] overflow-hidden border-t-2
                border-thirdColor bg-white py-5 text-center text-sm opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.1)]
                 duration-500 xxxs:top-10 xxxs:w-[250px] xxs:w-[330px] md:top-[55px]
                 2xl:top-[65.5px]"
              >
                <p className="w-full hover:text-current">
                  There are no items in your cart.
                </p>
              </div>
            ) : (
              <div
                className="invisible absolute right-0 top-9 z-[999] h-0 w-[220px] overflow-hidden border-t-2
                border-thirdColor bg-white p-0 text-center text-sm opacity-0 shadow-[0_1px_4px_rgba(0,0,0,0.1)]
                  duration-500 xxxs:top-10 xxxs:w-[250px]  xxs:w-[330px] md:top-[55px]
                  2xl:top-[65.5px]"
              >
                <p className="w-full hover:text-current">
                  There are no items in your cart.
                </p>
              </div>
            )}
          </div>

          <div
            className="flex cursor-pointer hover:text-thirdColor md:hidden"
            onClick={cartSetterFn}
          >
            <HiMiniBars3 />
          </div>

          {isOpen3 && <SearchField el={el} setterFn={setter2} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
