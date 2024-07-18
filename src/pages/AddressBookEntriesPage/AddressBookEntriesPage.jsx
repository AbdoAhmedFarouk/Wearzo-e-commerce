import { useRecoilValue } from 'recoil';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { changeAddressSuccessMsg } from '../../atoms/changeAddressSuccessMsg';

import useRemoveAddressBookEntry from '../../hooks/useRemoveAddressBookEntry';
import useUserCart from '../../hooks/useUserCart';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import MainButton from '../../components/MainButton/MainButton';
import TooltipButton from '../../components/TooltipButton/TooltipButton';

import Tooltip from '../../ui/Tooltip/Tooltip';

function AddressBookEntriesPage() {
  const addressSuccessMsg = useRecoilValue(changeAddressSuccessMsg);

  const { checkLoggedUser } = useUserCart();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const parentPathName = pathname.substring(1, pathname.indexOf('t') + 1);

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleDeleteAddressBookEntry = useRemoveAddressBookEntry();

  const otherAddresses = checkLoggedUser.otherAddresses;

  const otherAddressesLength = checkLoggedUser.otherAddresses.length;

  return (
    <SectionTag>
      <PageTitle
        header="Address Book Entries"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childRouteText="Address Book"
      />

      <div>
        <Container styles="text-primaryColor">
          {addressSuccessMsg !== '' && (
            <p
              className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${
                  addressSuccessMsg && 'bg-green-200 px-4 py-1.5 text-green-800'
                }`}
            >
              {addressSuccessMsg && addressSuccessMsg}
            </p>
          )}

          {otherAddressesLength ? (
            otherAddresses.map((address, idx) => (
              <div
                className="overflow-auto"
                key={Math.floor(Math.random() * 1000 * address.postCode)}
              >
                <table className="mb-5 w-full min-w-[450px] max-w-full text-sm">
                  <tbody>
                    <tr className="hover:bg-fifthColor">
                      <td>
                        Address: {address.address} <br />
                        Address: {address.city} <br />
                        Address: {address.country} <br />
                        Address: {address.postCode} <br />
                        Address: {address.region}
                      </td>

                      <td className="space-x-3 whitespace-nowrap text-right align-middle">
                        <Link
                          className="inline-block border-0 bg-primaryColor px-5 py-[7px]
                        text-sm uppercase text-white outline-0 duration-300
                        hover:bg-thirdColor md:px-[30px] md:py-2.5"
                          to={`edit-address-entry/${idx + 1}`}
                        >
                          edit
                        </Link>

                        <TooltipButton
                          buttonStyle="group/tooltip relative inline-block cursor-pointer border-0
                          bg-thirdColor px-5 py-[7px] text-sm uppercase text-white outline-0
                          duration-300 hover:bg-[#ac2925] md:px-[30px] md:py-2.5"
                          onClickHandler={() =>
                            handleDeleteAddressBookEntry(address.address)
                          }
                        >
                          delete
                          <Tooltip text="delete" styles="md:w-1/2 w-[65%]" />
                        </TooltipButton>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))
          ) : (
            <div className="mb-5 text-center">
              <h2 className="capitalize">your default address is:</h2>

              <p className="font-medium">{checkLoggedUser.address}</p>
            </div>
          )}

          <MainButton
            text="back"
            styles="bg-primaryColor text-white md:py-2.5 md:px-[30px] duration-300
            py-[7px] px-5 text-sm border-0 outline-0 uppercase hover:bg-thirdColor"
            onClickHandler={handleNavigateBack}
          />
        </Container>
      </div>
    </SectionTag>
  );
}

export default AddressBookEntriesPage;
