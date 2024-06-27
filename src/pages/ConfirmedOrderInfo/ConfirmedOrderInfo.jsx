import { useLocation, useNavigate, useParams } from 'react-router-dom';

import useUserCart from '../../hooks/useUserCart';
import useCalcTotalCartItemsPrice from '../../hooks/useCalcTotalCartItemsPrice';
import useAddProductsToUserCart from '../../hooks/useAddProductsToUserCart';
import useProductsReturns from '../../hooks/useProductsReturns';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';

import Tooltip from '../../ui/Tooltip/Tooltip';

import { HiShoppingCart } from 'react-icons/hi2';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';

function ConfirmedOrderInfo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();

  const { checkLoggedUser } = useUserCart();

  const parentPathName = pathname.substring(1, pathname.indexOf('t') + 1);
  const childPathName = pathname.substring(0, pathname.indexOf('y') + 1);

  const existingOrder = checkLoggedUser?.orderedProducts.find(
    (product) => product.orderId === id,
  );

  const length = checkLoggedUser?.returnedProducts.length;

  console.log(checkLoggedUser?.returnedProducts);

  console.log(checkLoggedUser?.returnedProducts[length - 1].isReturnedBefore);

  const totalCartItemsPrice = useCalcTotalCartItemsPrice(
    existingOrder.products,
  );

  const handleAddProductToUserCart = useAddProductsToUserCart();

  const handleProductReturn = useProductsReturns();

  const handleNavigateToOrderHistoryPage = () => {
    navigate(childPathName);
  };

  return (
    <SectionTag>
      <PageTitle
        header="order history"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childUrlRouteLink={childPathName.toLowerCase()}
        childRouteText="order History"
        grandChildRouteText="order info"
      />

      <div>
        <Container styles="text-primaryColor">
          <table className="mb-5 w-full max-w-full text-sm md:text-base">
            <thead>
              <tr className="capitalize">
                <th>order details</th>
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-fifthColor">
                <td>
                  <span className="font-medium">Order ID:</span> {id}
                  <br />
                  <span className="font-medium">Date Added:</span>{' '}
                  {existingOrder.dateAdded}
                </td>

                <td>
                  <span className="font-medium">Payment Method:</span>{' '}
                  {existingOrder.cashMethod}
                  <br />
                  <span className="font-medium">Payment Address:</span>{' '}
                  {existingOrder.orderAddress}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="overflow-x-auto text-sm md:text-base">
            <table className="w-full max-w-full">
              <thead>
                <tr className="capitalize">
                  <th>product ID</th>
                  <th>product name</th>
                  <th>quantity</th>
                  <th>price</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {existingOrder?.products?.map((product) => (
                  <tr className="hover:bg-fifthColor" key={product.id}>
                    <td>#{product.id}</td>

                    <td>{product.title}</td>

                    <td>{product.quantity}</td>

                    <td>€{product.price}</td>

                    <td className="w-[195px] whitespace-nowrap text-center">
                      <button
                        className="group/tooltip relative me-2 inline-block cursor-pointer bg-primaryColor
                        px-5 py-[7px] align-middle text-base leading-10 text-white
                        duration-500 hover:bg-thirdColor md:px-[30px] md:py-2.5"
                        onClick={() => handleAddProductToUserCart(product)}
                      >
                        <HiShoppingCart />

                        <Tooltip text="reorder" styles="w-[115%] md:w-11/12" />
                      </button>

                      <button
                        className="group/tooltip relative inline-block cursor-pointer bg-thirdColor px-5
                        py-[7px] align-middle text-base leading-10 text-white duration-500
                        hover:bg-[#ac2925] md:px-[30px] md:py-2.5"
                        onClick={() =>
                          handleProductReturn(
                            product,
                            existingOrder.orderId,
                            existingOrder.dateAdded,
                          )
                        }
                      >
                        <IoReturnUpBackOutline />

                        <Tooltip text="return" styles="w-[95%] md:w-11/12" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td className="capitalize" colSpan={3}>
                    total price after discount
                  </td>

                  <td className="font-bold" colSpan={1}>
                    €{totalCartItemsPrice}
                  </td>

                  <td colSpan={1}></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <ShopNowBtn
            text="continue"
            type="button"
            styles="ms-auto block bg-primaryColor mt-5 text-white md:py-2.5
            md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0 uppercase
            hover:bg-thirdColor"
            onClick={handleNavigateToOrderHistoryPage}
          />
        </Container>
      </div>
    </SectionTag>
  );
}

export default ConfirmedOrderInfo;
