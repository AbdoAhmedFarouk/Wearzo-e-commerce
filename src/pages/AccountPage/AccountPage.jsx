import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';

function AccountPage() {
  return (
    <SectionTag>
      <PageTitle text="Account" />

      <div>
        <Container styles="text-primaryColor">
          <div className="text-center sm:text-left">
            <div className="mb-5">
              <h3 className="mb-2.5 text-lg font-medium capitalize leading-5">
                My account
              </h3>

              <ul className="text-sm">
                <li>
                  <Link
                    className="inline-block py-[3px] hover:text-thirdColor"
                    to="edit-account-info"
                  >
                    Edit you account information
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block py-[3px] hover:text-thirdColor"
                    to="change-password"
                  >
                    Change your password
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block py-[3px] hover:text-thirdColor"
                    to="edit-address-book"
                  >
                    Modify you address book entries
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block py-[3px] hover:text-thirdColor"
                    to="/wishList"
                  >
                    Modify your wish list
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2.5 text-lg font-medium capitalize leading-5">
                My Orders
              </h3>

              <ul className="text-sm">
                <li>
                  <Link
                    className="inline-block py-[3px] hover:text-thirdColor"
                    to="order-history"
                  >
                    View your order history
                  </Link>
                </li>

                <li>
                  <Link
                    className="inline-block py-[3px] hover:text-thirdColor"
                    to="return-requests"
                  >
                    View your return requests
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default AccountPage;
