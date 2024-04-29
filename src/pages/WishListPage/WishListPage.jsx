import { Link } from 'react-router-dom';

import useCheckLoggedUser from '../../hooks/useCheckLoggedUser';
import WishlistProductItem from '../../components/WishlistProductItem/WishlistProductItem';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';

import { IoIosArrowBack } from 'react-icons/io';

function WishListPage() {
  const checkLoggedUser = useCheckLoggedUser();

  return (
    <SectionTag>
      <PageTitle text="my wish list" />

      <div>
        <Container styles="text-primaryColor">
          <div>
            <div className="border border-fourthColor">
              <div
                className="relative p-4 text-xl font-medium capitalize
                leading-none before:absolute before:bottom-0 before:left-0
                before:h-px before:w-full before:border-b before:border-fourthColor"
              >
                <h1>My wish List</h1>
              </div>

              <div>
                <ul>
                  {checkLoggedUser?.wishList.length > 0 ? (
                    checkLoggedUser?.wishList.map((item) => (
                      <WishlistProductItem key={item.id} item={item} />
                    ))
                  ) : (
                    <p className="fonme p-[15px] text-sm">
                      There are no items your wishlist.
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
        </Container>
      </div>
    </SectionTag>
  );
}

export default WishListPage;
