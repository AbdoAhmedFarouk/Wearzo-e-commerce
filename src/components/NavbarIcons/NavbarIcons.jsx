import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { NavLink, useNavigate } from 'react-router-dom';
import { isMobileMenuOpened } from '../../atoms/isMobileMenuOpened';
import { isSearchBarOpened } from '../../atoms/isSearchBarOpened';
import { isLoginMenuOpened } from '../../atoms/isOpened';

import { currentLoggedUser } from '../../atoms/currentLoggedUser';
import { userLoggingoutErrorMessage } from '../../atoms/userLoggingoutErrorMessage';
import { auth, logOut } from '../../firebase';
import { useIsOpen } from '../../hooks/useIsOpen';
import { useClickEvent } from '../../hooks/useClickEvent';
import { useClickOutSideEvent } from '../../hooks/useClickOutSideEvent';

import useCheckLoggedUser from '../../hooks/useCheckLoggedUser';
import useResetCartMenuState from '../../hooks/useResetCartMenuState';

import NavbarCartMenu from '../NavbarCartMenu/NavbarCartMenu';
import DropdownMenu from '../../ui/DropdownMenu/DropdownMenu';
import SearchField from '../../ui/SearchField/SearchField';

import { AiOutlineUser } from 'react-icons/ai';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';
import { Bounce, toast } from 'react-toastify';

function NavbarIcons() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useRecoilState(isMobileMenuOpened);
  const [isSearchBarOpen, setIsSearchBarOpen] =
    useRecoilState(isSearchBarOpened);
  const [isLoginMenuOpen, setIsLoginMenuOpen] =
    useRecoilState(isLoginMenuOpened);

  const [userLoggingoutErrMsg, setUserLoggingoutErrMsg] = useRecoilState(
    userLoggingoutErrorMessage,
  );
  const currentUser = useRecoilValue(currentLoggedUser);

  const navigate = useNavigate();
  const searchBgEl = useRef(null);
  const userEl = useRef(null);

  const checkLoggedUser = useCheckLoggedUser();

  const handleOpenMobileMenu = useIsOpen(isMobileMenuOpen, setIsMobileMenuOpen);
  const handleOpenSearchBar = useIsOpen(isSearchBarOpen, setIsSearchBarOpen);
  const handleOpenLoginMenu = useIsOpen(isLoginMenuOpen, setIsLoginMenuOpen);

  const handleResetCartMenuState = useResetCartMenuState();

  const handleResetLoginMenuState = () => {
    setIsLoginMenuOpen(false);
  };

  const handleResetSearchBarState = () => {
    setIsSearchBarOpen(false);
  };

  const handleUserLoggingOut = async () => {
    try {
      setUserLoggingoutErrMsg('');

      await logOut(auth);

      navigate('/signin');
    } catch {
      setUserLoggingoutErrMsg('Failed to log out.');
    }
  };

  const handleLogoutError = () => {
    userLoggingoutErrMsg
      ? toast.error('Failed to log out.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
      : handleUserLoggingOut();
  };

  useClickEvent(searchBgEl, handleResetSearchBarState);
  useClickOutSideEvent(userEl, handleResetLoginMenuState);

  return (
    <div
      className="flex gap-3 p-[17px] pr-0 text-xl text-primaryColor
      xxxs:text-2xl xxs:p-[17px] sm:gap-5 md:gap-7 md:p-0 "
    >
      <div
        className="cursor-pointer hover:text-thirdColor"
        onClick={() => {
          handleOpenSearchBar();
          handleResetCartMenuState();
        }}
      >
        <IoIosSearch />
      </div>

      <div
        className={`relative cursor-pointer hover:text-thirdColor
        ${isLoginMenuOpen && 'text-thirdColor'}`}
        onClick={() => {
          handleOpenLoginMenu();
          handleResetCartMenuState();
        }}
        ref={userEl}
      >
        <AiOutlineUser />

        <DropdownMenu
          isOpen={isLoginMenuOpen}
          fontSize="text-sm"
          xDirection="right-0"
          yDirection="2xl:top-[65.5px] xxxs:top-10 top-9 md:top-[55px]"
          height={`${!currentUser?.email ? 'h-[59.78px]' : 'h-[83.78px]'}`}
          width="w-28 xxxs:min-w-[160px]"
          shadow="shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
        >
          {!currentUser?.email ? (
            <>
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
            </>
          ) : (
            <>
              <li className="cursor-pointer px-[15px] leading-none hover:text-primaryColor">
                <NavLink className="flex py-[5px]" to="account">
                  My Acount
                </NavLink>
              </li>

              <li className="cursor-pointer px-[15px] leading-none hover:text-primaryColor">
                <NavLink className="flex py-[5px]" to="wishList">
                  Wishlist ({checkLoggedUser?.wishList.length})
                </NavLink>
              </li>

              <li className="cursor-pointer px-[15px] leading-none hover:text-primaryColor">
                <button
                  type="button"
                  className="flex w-full py-[5px]"
                  onClick={handleLogoutError}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </DropdownMenu>
      </div>

      <NavbarCartMenu />

      <div
        className="flex cursor-pointer hover:text-thirdColor md:hidden"
        onClick={handleOpenMobileMenu}
      >
        <HiMiniBars3 />
      </div>

      {isSearchBarOpen && <SearchField refEl={searchBgEl} />}
    </div>
  );
}

export default NavbarIcons;
