import { useRef } from 'react';
import { PropTypes } from 'prop-types';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { NavLink } from 'react-router-dom';
import { useIsOpen } from '../../hooks/useIsOpen';
import { useClickOutSide } from '../../hooks/useClickOutside';
import { isSearchBarOpen } from '../../atoms/isModalOpen';
import { isAsideMobileOpen } from '../../atoms/aside';
import { useClick } from '../../hooks/useClick';
import { isLoginMenuOpen } from '../../atoms/isOpen';

import DropdownMenu from '../../ui/DropdownMenu/DropdownMenu';
import SearchField from '../../ui/SearchField/SearchField';

import { AiOutlineUser } from 'react-icons/ai';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';

import NavbarCartMenu from '../NavbarCartMenu/NavbarCartMenu';

NavbarIcons.propTypes = {
  handleOpenCartMenu: PropTypes.func,
  handleOpenLoginMenu: PropTypes.func,
};

function NavbarIcons({ handleOpenCartMenu, handleOpenLoginMenu }) {
  const [isOpen2, setIsOpen2] = useRecoilState(isAsideMobileOpen);
  const [isOpen3, setIsOpen3] = useRecoilState(isSearchBarOpen);
  const isOpen = useRecoilValue(isLoginMenuOpen);

  const setter1 = useResetRecoilState(isLoginMenuOpen);
  const setter2 = useResetRecoilState(isSearchBarOpen);

  const cartSetterFn = useIsOpen(isOpen2, setIsOpen2);
  const searchSetterFn = useIsOpen(isOpen3, setIsOpen3);

  const searchBgEl = useRef(null);
  const userEl = useRef(null);

  const setterFunction1 = () => {
    setter1();
  };

  const setterFunction2 = () => {
    setter2();
  };

  useClickOutSide(userEl, setterFunction1);
  useClick(searchBgEl, setterFunction2);

  return (
    <div
      className="flex gap-3 p-[17px] pr-0 text-xl text-primaryColor
      xxxs:text-2xl xxs:p-[17px] sm:gap-5 md:gap-7 md:p-0 "
    >
      <div
        className="cursor-pointer hover:text-thirdColor"
        onClick={searchSetterFn}
      >
        <IoIosSearch />
      </div>

      <div
        className={`relative cursor-pointer hover:text-thirdColor
        ${isOpen && 'text-thirdColor'}`}
        onClick={handleOpenLoginMenu}
        ref={userEl}
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

      <NavbarCartMenu handleOpenCartMenu={handleOpenCartMenu} />

      <div
        className="flex cursor-pointer hover:text-thirdColor md:hidden"
        onClick={cartSetterFn}
      >
        <HiMiniBars3 />
      </div>

      {isOpen3 && <SearchField el={searchBgEl} setterFn={setter2} />}
    </div>
  );
}

export default NavbarIcons;
