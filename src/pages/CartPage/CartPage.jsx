import { Link } from 'react-router-dom';

import useCalcTotalCartItemsPrice from '../../hooks/useCalcTotalCartItemsPrice';
import useCheckLoggedUser from '../../hooks/useCheckLoggedUser';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import SiteInfoRules from '../../components/SiteInfoRules/SiteInfoRules';
import CartProductItem from '../../components/CartProductItem/CartProductItem';

import { IoIosArrowBack } from 'react-icons/io';

function CartPage() {
  const checkLoggedUser = useCheckLoggedUser();

  const totalCartItemsPrice = useCalcTotalCartItemsPrice(checkLoggedUser.cart);

  return (
    <SectionTag>
      <PageTitle text="cart" />

      <div>
        <Container
          styles="grid grid-cols-1 sm:grid-cols-12 text-primaryColor
          sm:gap-x-[30px] gap-[30px]"
        >
          <div className="sm:col-span-8">
            <div className="border border-fourthColor">
              <div
                className="relative p-4 text-xl font-medium capitalize
                leading-none before:absolute before:bottom-0 before:left-0
                before:h-px before:w-full before:border-b before:border-fourthColor"
              >
                <h1>shopping cart</h1>
              </div>

              <div>
                <ul>
                  {checkLoggedUser?.cart.length > 0 ? (
                    checkLoggedUser?.cart.map((item) => (
                      <CartProductItem key={item.id} {...item} />
                    ))
                  ) : (
                    <p className="fonme p-[15px] text-sm">
                      There are no items your cart.
                    </p>
                  )}
                </ul>
              </div>
            </div>

            <Link
              className="mt-3 flex w-fit cursor-pointer
              items-center text-sm font-medium sm:text-base"
              to="/"
            >
              <IoIosArrowBack />

              <span className="ms-0.5">Continue shopping</span>
            </Link>
          </div>

          <div className="sm:col-span-4">
            <div className="border border-fourthColor">
              <div
                className="flex items-center justify-between border-b
                border-fourthColor p-[15px] text-sm font-medium
                text-primaryColor"
              >
                <span>{checkLoggedUser?.cart.length} items</span>

                <span>${totalCartItemsPrice}</span>
              </div>

              <div
                className="flex items-center justify-between border-b
                border-fourthColor p-[15px] text-sm font-medium
                text-primaryColor"
              >
                <span>Total (tax incl.)</span>

                <span className="text-lg leading-5">
                  ${totalCartItemsPrice}
                </span>
              </div>

              <div className="p-[15px] text-center">
                <ShopNowBtn
                  text="checkout"
                  styles="py-2.5 px-[30px] bg-primaryColor
                  hover:bg-thirdColor text-white uppercase
                  text-sm duration-300 outline-0 border-0"
                />
              </div>
            </div>

            <SiteInfoRules />
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default CartPage;
