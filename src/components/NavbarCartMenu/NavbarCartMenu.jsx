import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLoggedUser } from '../../atoms/currentLoggedUser';
import { isCartMenuOpened } from '../../atoms/isOpened';

import addedProductToGlobalCartMenu from '../../atoms/addedProductToGlobalCartMenu';
import useCalcTotalCartItemsPrice from '../../hooks/useCalcTotalCartItemsPrice';
import useCheckLoggedUser from '../../hooks/useCheckLoggedUser';
import { useIsOpen } from '../../hooks/useIsOpen';

import MenuCartProductBox from '../MenuCartProductBox/MenuCartProductBox';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

function NavbarCartMenu() {
  const [isCartMenuOpen, setIsCartMenuOpen] = useRecoilState(isCartMenuOpened);

  const currentUser = useRecoilValue(currentLoggedUser);
  const addedProductToGlobalCart = useRecoilValue(addedProductToGlobalCartMenu);

  const checkLoggedUser = useCheckLoggedUser();

  const handleResetCartMenuState = () => {
    setIsCartMenuOpen(false);
  };

  const totalCartItemsPrice = useCalcTotalCartItemsPrice(
    checkLoggedUser?.cart ? checkLoggedUser?.cart : addedProductToGlobalCart,
  );

  const handleOpenCartMenu = useIsOpen(isCartMenuOpen, setIsCartMenuOpen);

  return (
    <div className="xxxs:relative">
      <div
        className={`flex cursor-pointer items-center hover:text-thirdColor
        ${isCartMenuOpen && 'text-thirdColor'}`}
        onClick={handleOpenCartMenu}
      >
        <HiOutlineShoppingBag />

        <span className="ms-2 mt-1 hidden items-center text-sm uppercase md:flex">
          {!currentUser?.email
            ? addedProductToGlobalCart.length
            : checkLoggedUser?.cart.length}{' '}
          item(s){' '}
          <span className="text-xl">
            <MdKeyboardArrowDown />
          </span>
        </span>
      </div>

      {currentUser?.email ? (
        isCartMenuOpen ? (
          <div
            className={`visible absolute right-0 top-full z-[999] h-[393px] w-full
            overflow-hidden border-t-2 border-thirdColor bg-white py-5 text-center
            text-sm opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.1)] duration-500 
            xxxs:right-0 xxxs:top-[39px] xxxs:w-[310px] xxs:w-[350px] md:top-[55px] 2xl:top-[65.5px]
            ${checkLoggedUser?.cart.length > 0 ? '' : 'h-[62px]'}`}
          >
            {checkLoggedUser?.cart.length > 0 ? (
              <>
                <div
                  className="scrollbar mb-[15px] max-h-[225px] w-full
                    space-y-4 overflow-y-auto overflow-x-hidden px-5"
                >
                  {checkLoggedUser?.cart.map((product) => (
                    <MenuCartProductBox product={product} key={product.id} />
                  ))}
                </div>

                <div className="mb-[15px] w-full px-5 text-base">
                  <div
                    className="flex items-center justify-between border-y
                    border-fourthColor py-[15px]"
                  >
                    <span className="font-medium">Total</span>

                    <span>€{totalCartItemsPrice}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <Link
                    className="cursor-pointer border-0 bg-primaryColor px-5
                      py-2.5 text-sm uppercase text-white outline-0 duration-300
                      hover:bg-thirdColor"
                    to="cart"
                    onClick={handleResetCartMenuState}
                  >
                    view cart
                  </Link>

                  <Link
                    className="cursor-pointer border-0 bg-primaryColor px-5
                      py-2.5 text-sm uppercase text-white outline-0 duration-300
                      hover:bg-thirdColor"
                  >
                    checkout
                  </Link>
                </div>
              </>
            ) : (
              <p className="w-full">There are no items in your cart.</p>
            )}
          </div>
        ) : (
          <div
            className="invisible absolute right-0 top-full z-[999] h-0 w-full
            overflow-hidden border-t-2 border-thirdColor bg-white p-0 text-center
            text-sm opacity-0 shadow-[0_1px_4px_rgba(0,0,0,0.1)] duration-500 xxxs:right-0
            xxxs:top-[39px] xxxs:w-[310px] xxs:w-[350px] md:top-[55px] 2xl:top-[65.5px]"
          >
            {checkLoggedUser?.cart.length > 0 ? (
              <>
                <div
                  className="scrollbar mb-[15px] max-h-[225px] w-full
                  space-y-4 overflow-y-auto overflow-x-hidden px-5"
                >
                  {checkLoggedUser?.cart.map((product) => (
                    <MenuCartProductBox product={product} key={product.id} />
                  ))}
                </div>

                <div className="mb-[15px] w-full px-5 text-base">
                  <div
                    className="flex items-center justify-between border-y
                    border-fourthColor py-[15px]"
                  >
                    <span className="font-medium">Total</span>

                    <span>€{totalCartItemsPrice}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <Link
                    className="cursor-pointer border-0 bg-primaryColor px-5
                    py-2.5 text-sm uppercase text-white outline-0 duration-300
                    hover:bg-thirdColor"
                    to="cart"
                  >
                    view cart
                  </Link>

                  <Link
                    className="cursor-pointer border-0 bg-primaryColor px-5
                    py-2.5 text-sm uppercase text-white outline-0 duration-300
                    hover:bg-thirdColor"
                  >
                    checkout
                  </Link>
                </div>
              </>
            ) : (
              <p className="w-full">There are no items in your cart.</p>
            )}
          </div>
        )
      ) : isCartMenuOpen ? (
        <div
          className={`visible absolute right-0 top-full z-[999] h-[393px] w-full
            overflow-hidden border-t-2 border-thirdColor bg-white py-5 text-center
            text-sm opacity-100 shadow-[0_1px_4px_rgba(0,0,0,0.1)] duration-500 
            xxxs:right-0 xxxs:top-[39px] xxxs:w-[310px] xxs:w-[350px] md:top-[55px] 2xl:top-[65.5px]
            ${addedProductToGlobalCart.length > 0 ? '' : 'h-[62px]'}`}
        >
          {addedProductToGlobalCart.length > 0 ? (
            <>
              <div
                className="scrollbar mb-[15px] max-h-[225px] w-full
                space-y-4 overflow-y-auto overflow-x-hidden px-5"
              >
                {addedProductToGlobalCart.map((product) => (
                  <MenuCartProductBox product={product} key={product.id} />
                ))}
              </div>

              <div className="mb-[15px] w-full px-5 text-base">
                <div
                  className="flex items-center justify-between border-y
                  border-fourthColor py-[15px]"
                >
                  <span className="font-medium">Total</span>

                  <span>€{totalCartItemsPrice}</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Link
                  className="cursor-pointer border-0 bg-primaryColor px-5
                  py-2.5 text-sm uppercase text-white outline-0 duration-300
                  hover:bg-thirdColor"
                  to="cart"
                  onClick={handleResetCartMenuState}
                >
                  view cart
                </Link>

                <Link
                  className="cursor-pointer border-0 bg-primaryColor px-5
                  py-2.5 text-sm uppercase text-white outline-0 duration-300
                  hover:bg-thirdColor"
                >
                  checkout
                </Link>
              </div>
            </>
          ) : (
            <p className="w-full">There are no items in the global cart.</p>
          )}
        </div>
      ) : (
        <div
          className="invisible absolute right-0 top-full z-[999] h-0 w-full
            overflow-hidden border-t-2 border-thirdColor bg-white p-0 text-center
            text-sm opacity-0 shadow-[0_1px_4px_rgba(0,0,0,0.1)] duration-500 xxxs:right-0
            xxxs:top-[39px] xxxs:w-[310px] xxs:w-[350px] md:top-[55px] 2xl:top-[65.5px]"
        >
          {addedProductToGlobalCart.length > 0 ? (
            <>
              <div
                className="scrollbar mb-[15px] max-h-[225px] w-full
                space-y-4 overflow-y-auto overflow-x-hidden px-5"
              >
                {addedProductToGlobalCart.map((product) => (
                  <MenuCartProductBox product={product} key={product.id} />
                ))}
              </div>

              <div className="mb-[15px] w-full px-5 text-base">
                <div
                  className="flex items-center justify-between border-y
                  border-fourthColor py-[15px]"
                >
                  <span className="font-medium">Total</span>

                  <span>€{totalCartItemsPrice}</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Link
                  className="cursor-pointer border-0 bg-primaryColor px-5
                    py-2.5 text-sm uppercase text-white outline-0 duration-300
                    hover:bg-thirdColor"
                  to="cart"
                >
                  view cart
                </Link>

                <Link
                  className="cursor-pointer border-0 bg-primaryColor px-5
                    py-2.5 text-sm uppercase text-white outline-0 duration-300
                    hover:bg-thirdColor"
                >
                  checkout
                </Link>
              </div>
            </>
          ) : (
            <p className="w-full">There are no items in the global cart.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default NavbarCartMenu;
