import { Link, useLocation, useNavigate } from 'react-router-dom';

import useUserCart from '../../hooks/useUserCart';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';

import Tooltip from '../../ui/Tooltip/Tooltip';

import { FaEye } from 'react-icons/fa';

function OrderHistoryPage() {
  const { checkLoggedUser } = useUserCart();
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const parentPathName = pathname.substring(1, pathname.lastIndexOf('/'));

  const handleNavigateToAccountPage = () => {
    navigate(`/${parentPathName}`);
  };

  return (
    <SectionTag>
      <PageTitle
        header="order history"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childRouteText="order history"
      />

      <div>
        <Container styles="text-primaryColor">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm sm:text-base">
              <thead>
                <tr>
                  <th>Oder Id</th>
                  <th>Customer Name</th>
                  <th>No. of products</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Date added</th>
                  {!checkLoggedUser.orderedProducts.length ?? <th></th>}
                </tr>
              </thead>

              <tbody>
                {checkLoggedUser.orderedProducts.map((order) => (
                  <tr className="hover:bg-fifthColor" key={order.orderId}>
                    <td>#{order.orderId}</td>

                    <td>{checkLoggedUser?.firstName}</td>

                    <td>{order.productsNumber}</td>

                    <td>pending</td>

                    <td>€{order.totalPrice}</td>

                    <td>{order.dateAdded}</td>

                    <td className="text-center">
                      <Link
                        className="group/tooltip relative inline-block cursor-pointer
                        bg-primaryColor px-[30px] py-2.5 text-center align-middle text-base
                        leading-10 text-white duration-500 hover:bg-thirdColor"
                        to={`order-info/${order.orderId}`}
                      >
                        <FaEye />

                        <Tooltip text="view" styles="w-[70%]" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                {!checkLoggedUser.orderedProducts.length && (
                  <tr className="hover:bg-fifthColor">
                    <td colSpan="7">You don&apos;t have any orders yet!</td>
                  </tr>
                )}
              </tfoot>
            </table>
          </div>

          <ShopNowBtn
            text="continue"
            type="button"
            styles="ms-auto block bg-primaryColor mt-5 text-white md:py-2.5
            md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0 uppercase
            hover:bg-thirdColor"
            onClick={handleNavigateToAccountPage}
          />
        </Container>
      </div>
    </SectionTag>
  );
}

export default OrderHistoryPage;
