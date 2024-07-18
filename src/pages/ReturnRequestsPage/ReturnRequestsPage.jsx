import { Link, useLocation, useNavigate } from 'react-router-dom';

import useUserCart from '../../hooks/useUserCart';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import MainButton from '../../components/MainButton/MainButton';
import TooltipButton from '../../components/TooltipButton/TooltipButton';

import Tooltip from '../../ui/Tooltip/Tooltip';

import { FaEye } from 'react-icons/fa';

const urlWord = 'account';

function ReturnRequestsPage() {
  const { pathname } = useLocation();

  const { checkLoggedUser } = useUserCart();

  const returnedProducts = checkLoggedUser?.returnedProducts;

  const parentPathName = pathname.substring(1, urlWord.length + 1);

  const navigate = useNavigate();

  const handleNavigateToAccountPage = () => {
    navigate('/account');
  };

  return (
    <SectionTag>
      <PageTitle
        header="product returns"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childRouteText="product returns"
      />

      <div>
        <Container styles="text-primaryColor">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm sm:text-base">
              <thead>
                <tr className="capitalize">
                  <th>return Id</th>
                  <th>Status</th>
                  <th>date added</th>
                  <th>Order id</th>
                  <th>customer</th>
                  {!returnedProducts.length ?? <th></th>}
                </tr>
              </thead>

              <tbody>
                {returnedProducts.map((order) => (
                  <tr
                    className="hover:bg-fifthColor"
                    key={`${returnedProducts[0].orderId}-${Math.floor(
                      Math.random() * 100000,
                    )}`}
                  >
                    <td>{order?.returnId?.slice(0, 7)}...</td>

                    <td className="capitalize">awaiting products</td>

                    <td>{order.dateAdded}</td>

                    <td>#{order.orderId}</td>

                    <td>{checkLoggedUser?.firstName}</td>

                    <td className="text-center">
                      <TooltipButton>
                        <Link
                          className="group/tooltip relative inline-block cursor-pointer
                          bg-primaryColor px-[30px] py-2.5 text-center align-middle text-base
                          leading-10 text-white duration-500 hover:bg-thirdColor"
                          to={`return-info/${order.returnId}`}
                        >
                          <FaEye />

                          <Tooltip text="view" styles="w-[70%]" />
                        </Link>
                      </TooltipButton>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                {!returnedProducts.length && (
                  <tr className="hover:bg-fifthColor">
                    <td colSpan="7">
                      You don&apos;t have any returned orders yet!
                    </td>
                  </tr>
                )}
              </tfoot>
            </table>
          </div>

          <MainButton
            text="continue"
            type="button"
            styles="ms-auto block bg-primaryColor mt-5 text-white md:py-2.5
            md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0 uppercase
            hover:bg-thirdColor"
            onClickHandler={handleNavigateToAccountPage}
          />
        </Container>
      </div>
    </SectionTag>
  );
}

export default ReturnRequestsPage;
