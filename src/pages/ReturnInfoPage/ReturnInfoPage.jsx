import { useLocation, useParams } from 'react-router-dom';

import useUserCart from '../../hooks/useUserCart';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';

function ReturnInfoPage() {
  const { pathname } = useLocation();
  const { id } = useParams();

  const { checkLoggedUser } = useUserCart();

  const parentPathName = pathname.substring(1, pathname.indexOf('t') + 1);
  const childPathName = pathname.substring(
    0,
    pathname.search('return-info') - 1,
  );

  const existingProduct = checkLoggedUser?.returnedProducts.find(
    (product) => product.returnId === id,
  );

  return (
    <SectionTag>
      <PageTitle
        header="product returns"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childUrlRouteLink={childPathName.toLowerCase()}
        childRouteText="product returns"
        grandChildRouteText="return info"
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
                  <span className="font-medium">Return ID:</span>{' '}
                  {existingProduct.returnId}
                  <br />
                  <span className="font-medium">Date Added:</span>{' '}
                  {existingProduct.dateAdded}
                </td>

                <td>
                  <span className="font-medium">Order ID:</span>{' '}
                  {existingProduct.orderId}
                  <br />
                  <span className="font-medium">Order Date:</span>{' '}
                  {existingProduct.orderDate}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="text-sm md:text-base">
            <div className="mb-5 overflow-x-auto">
              <h3 className="mb-2.5 text-lg font-medium capitalize leading-5">
                product information
              </h3>

              <table className="w-full max-w-full">
                <thead>
                  <tr className="capitalize">
                    <th>product name</th>
                    <th>model</th>
                    <th>quantity</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{existingProduct.title}</td>
                    <td>{existingProduct.price}</td>
                    <td>{existingProduct.quantity}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto ">
              <h3 className="mb-2.5 text-lg font-medium capitalize leading-5">
                reason for return
              </h3>

              <table className="w-full max-w-full">
                <thead>
                  <tr className="capitalize">
                    <th>reason</th>
                    <th>opened</th>
                    <th>comment</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{existingProduct.title}</td>
                    <td>{existingProduct.price}</td>
                    <td>{existingProduct.quantity}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default ReturnInfoPage;
