import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { changeAddressSuccessMsg } from '../../atoms/changeAddressSuccessMsg';

import useUserCart from '../../hooks/useUserCart';
import useClearFormFields from '../../hooks/useClearFormFields';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import LabelAndInput from '../../components/LabelAndInput/LabelAndInput';
import MainButton from '../../components/MainButton/MainButton';

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-1.5 max-h-10 text-primaryColor h-10`;

function EditAddressEntryPage() {
  const setAddressSuccessMsg = useSetRecoilState(changeAddressSuccessMsg);
  const { pathname } = useLocation();
  const { id } = useParams();

  const navigate = useNavigate();
  const navigateAfterFormSubmition = useNavigate();

  const newAddressRefEl = useRef();
  const newCityRefEl = useRef();
  const newPostCodeRefEl = useRef();
  const newCountryRefEl = useRef();
  const newRegionRefEl = useRef();

  const { setLoggedUsers, checkLoggedUser } = useUserCart();

  const clearFormFields = useClearFormFields();

  const parentPathName = pathname.substring(1, pathname.indexOf('t') + 1);

  const childPathName = pathname.substring(0, pathname.indexOf('k') + 1);

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newAddressBookEntryObj = {
      address: newAddressRefEl?.current?.value,
      city: newCityRefEl?.current?.value,
      postCode: newPostCodeRefEl?.current?.value,
      country: newCountryRefEl?.current?.value,
      region: newRegionRefEl?.current?.value,
    };

    const addressIndex = checkLoggedUser.otherAddresses.findIndex(
      (_, idx) => idx === id - 1,
    );

    if (addressIndex !== -1) {
      const updatedAddresses = checkLoggedUser.otherAddresses.map(
        (address, index) =>
          index === addressIndex ? newAddressBookEntryObj : address,
      );

      setLoggedUsers((users) =>
        users.map((user) =>
          user.email === checkLoggedUser?.email
            ? {
                ...user,

                otherAddresses: updatedAddresses,
              }
            : user,
        ),
      );

      clearFormFields(
        newAddressRefEl,
        newCityRefEl,
        newPostCodeRefEl,
        newCountryRefEl,
        newRegionRefEl,
      );

      setAddressSuccessMsg('Your new address has been updated successfully.');

      navigateAfterFormSubmition(childPathName);
    }
  };

  useEffect(() => {
    setAddressSuccessMsg('');
  }, [setAddressSuccessMsg]);

  return (
    <SectionTag>
      <PageTitle
        header="address book entries"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childUrlRouteLink={`${childPathName.toLowerCase()}`}
        childRouteText="Address book"
        grandChildRouteText="edit address"
      />

      <div>
        <Container styles="text-primaryColor">
          <form
            className="w-full space-y-5 px-[15px] md:m-auto md:w-3/4"
            onSubmit={handleFormSubmit}
          >
            <LabelAndInput
              divStyles="sm:grid-cols-12"
              lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
              sm:text-right"
              inputStyles={`${inputDefaultStyles} col-span-10`}
              htmlFor="checkoutNewAddressInp"
              labelText="address"
              placeholder="address"
              id="checkoutNewAddressInp"
              name="new-address"
              required
              refEl={newAddressRefEl}
            />

            <LabelAndInput
              divStyles="sm:grid-cols-12"
              lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
              sm:text-right"
              inputStyles={`${inputDefaultStyles} col-span-10`}
              htmlFor="checkoutCityInp"
              labelText="city"
              placeholder="city"
              id="checkoutCityInp"
              name="city"
              required
              refEl={newCityRefEl}
            />

            <LabelAndInput
              divStyles="sm:grid-cols-12"
              lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
              sm:text-right"
              inputStyles={`${inputDefaultStyles} col-span-10`}
              htmlFor="checkoutPostCodeInp"
              labelText="post code"
              placeholder="post code"
              id="checkoutPostCodeInp"
              name="postCode"
              type="number"
              required
              refEl={newPostCodeRefEl}
            />

            <LabelAndInput
              divStyles="sm:grid-cols-12"
              lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
              sm:text-right"
              inputStyles={`${inputDefaultStyles} col-span-10`}
              htmlFor="checkoutCountryInp"
              labelText="Country"
              placeholder="Country"
              id="checkoutCountryInp"
              name="country"
              required
              refEl={newCountryRefEl}
            />

            <LabelAndInput
              divStyles="sm:grid-cols-12"
              lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
              sm:text-left sm:whitespace-nowrap md:text-right"
              inputStyles={`${inputDefaultStyles} col-span-10`}
              htmlFor="checkoutRegionInp"
              labelText="Region / state"
              placeholder="Region / state"
              id="checkoutRegionInp"
              name="region-state"
              required
              refEl={newRegionRefEl}
            />

            <div
              className="mt-5 flex flex-col-reverse gap-5 xxs:flex-row
              xxs:items-center xxs:justify-between xxs:gap-0"
            >
              <MainButton
                text="back"
                styles="bg-primaryColor text-white md:py-2.5 md:px-[30px] duration-300
                py-[7px] px-5 text-sm border-0 outline-0 uppercase hover:bg-thirdColor"
                onClickHandler={handleNavigateBack}
              />

              <MainButton
                text="continue"
                type="submit"
                styles="bg-primaryColor text-white md:py-2.5 md:px-[30px] duration-300
                py-[7px] px-5 text-sm border-0 outline-0 uppercase"
              />
            </div>
          </form>
        </Container>
      </div>
    </SectionTag>
  );
}

export default EditAddressEntryPage;
