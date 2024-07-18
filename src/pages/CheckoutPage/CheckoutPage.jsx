import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  isCheckoutPageConfirmOrderPanelOpened,
  isCheckoutPageDeliveryDetailsPanelOpened,
  isCheckoutPagePaymentMethodPanelOpened,
} from '../../atoms/isCheckoutPagePanelsOpened';
import {
  isCheckoutPageAddressRadioBtnChecked,
  isCheckoutPagePaymentMethodRadioBtnChecked,
} from '../../atoms/isCheckoutPageRadioBtnsChecked';
import {
  isCheckoutPageDeliveryDetailsFormSubmitted,
  isCheckoutPagePaymentMethodFormSubmitted,
} from '../../atoms/isCheckoutPageFormsSubmitted';

import useUserCart from '../../hooks/useUserCart';
import useCalcTotalCartItemsPrice from '../../hooks/useCalcTotalCartItemsPrice';
import useClearFormFields from '../../hooks/useClearFormFields';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import MainButton from '../../components/MainButton/MainButton';
import LabelAndInput from '../../components/LabelAndInput/LabelAndInput';
import CustomRadioBtn from '../../components/CustomRadioBtn/CustomRadioBtn';
import CheckoutDropdownPanel from '../../components/CheckoutDropdownPanel/CheckoutDropdownPanel';

import creditCardImg from '../../assets/6071546-removebg-preview.png';

const inputDefaultStyles = `border-fourthColor bg-white border
xxs:px-[15px] xxs:py-2.5 max-h-10 text-secondaryColor py-1.5 px-[15px]`;

const dateObj = new Date();
const month = dateObj.getMonth() + 1;
const day = dateObj.getDate();
const year = dateObj.getFullYear();

const newDate = `${day}/${month}/${year}`;

// edit this component and make it clean

function CheckoutPage() {
  const [
    isCheckoutPageAddressRadioBtnCheck,
    setIsCheckoutPageAddressRadioBtnCheck,
  ] = useRecoilState(isCheckoutPageAddressRadioBtnChecked);

  const [
    isCheckoutPagePaymentMethodRadioBtnCheck,
    setIsCheckoutPagePaymentMethodRadioBtnCheck,
  ] = useRecoilState(isCheckoutPagePaymentMethodRadioBtnChecked);

  const [
    isCheckoutPageDeliveryDetailsPanelOpen,
    setIsCheckoutPageDeliveryDetailsPanelOpen,
  ] = useRecoilState(isCheckoutPageDeliveryDetailsPanelOpened);

  const [
    isCheckoutPagePaymentMethodPanelOpen,
    setIsCheckoutPagePaymentMethodPanelOpen,
  ] = useRecoilState(isCheckoutPagePaymentMethodPanelOpened);

  const [
    isCheckoutPageConfirmOrderPanelOpen,
    setIsCheckoutPageConfirmOrderPanelOpen,
  ] = useRecoilState(isCheckoutPageConfirmOrderPanelOpened);

  const [
    isCheckoutPageDeliveryDetailsFormSubmit,
    setIsCheckoutPageDeliveryDetailsFormSubmit,
  ] = useRecoilState(isCheckoutPageDeliveryDetailsFormSubmitted);

  const [
    isCheckoutPagePaymentMethodFormSubmit,
    setIsCheckoutPagePaymentMethodFormSubmit,
  ] = useRecoilState(isCheckoutPagePaymentMethodFormSubmitted);

  const [newAddressInputValue, setNewAddressInputValue] = useState('');

  const newAddressRefEl = useRef();
  const cityRefEl = useRef();
  const postCodeRefEl = useRef();
  const countryRefEl = useRef();
  const regionRefEl = useRef();

  const cardNumberRefEl = useRef();
  const cardHolderNameRefEl = useRef();
  const cardMonthRefEl = useRef();
  const cardYearRefEl = useRef();
  const cardCVVRefEl = useRef();

  const clearFormFields = useClearFormFields();

  const navigate = useNavigate();

  const { setLoggedUsers, checkLoggedUser } = useUserCart();

  const totalCartItemsPrice = useCalcTotalCartItemsPrice(
    checkLoggedUser?.cart ? checkLoggedUser?.cart : 0,
  );

  const isAddressRadioBtnChecked = isCheckoutPageAddressRadioBtnCheck
    ? true
    : false;

  const isPaymentRadioBtnChecked = isCheckoutPagePaymentMethodRadioBtnCheck
    ? true
    : false;

  const handleNewAddressRadioBtnCheckChange = (e) => {
    setIsCheckoutPageAddressRadioBtnCheck(e.target.checked);
  };

  const handleOldAddressRadioBtnCheckChange = (e) => {
    setIsCheckoutPageAddressRadioBtnCheck(!e.target.checked);
  };

  const handleOnlinePaymentRadioBtnCheckChange = (e) => {
    setIsCheckoutPagePaymentMethodRadioBtnCheck(e.target.checked);
  };

  const handleCashPaymentRadioBtnCheckChange = (e) => {
    setIsCheckoutPagePaymentMethodRadioBtnCheck(!e.target.checked);
  };

  const handleToggleCheckoutPageDeliveryDetailsPanel = () => {
    setIsCheckoutPageDeliveryDetailsPanelOpen(
      !isCheckoutPageDeliveryDetailsPanelOpen,
    );
  };

  const handleToggleCheckoutPagePaymentMethodsPanel = () => {
    setIsCheckoutPagePaymentMethodPanelOpen(
      !isCheckoutPagePaymentMethodPanelOpen,
    );
  };

  const handleToggleCheckoutPageConfirmOrderPanel = () => {
    setIsCheckoutPageConfirmOrderPanelOpen(
      !isCheckoutPageConfirmOrderPanelOpen,
    );
  };

  const handleResetStates = () => {
    setIsCheckoutPageDeliveryDetailsFormSubmit(true);
    setIsCheckoutPageDeliveryDetailsPanelOpen(false);
    setIsCheckoutPagePaymentMethodPanelOpen(true);
  };

  // edit this function and make it clean
  const handleOpenPaymentPanelOnDeliveryDetailsFormSubmit = (e) => {
    e.preventDefault();

    const newAddressBookEntryObj = {
      address: newAddressRefEl?.current?.value,
      city: cityRefEl?.current?.value,
      postCode: postCodeRefEl?.current?.value,
      country: countryRefEl?.current?.value,
      region: regionRefEl?.current?.value,
    };

    if (!isCheckoutPageAddressRadioBtnCheck) {
      handleResetStates();
    } else {
      handleResetStates();

      setNewAddressInputValue(newAddressRefEl?.current?.value);

      setLoggedUsers((users) =>
        users.map((user) =>
          user.email === checkLoggedUser?.email
            ? {
                ...user,

                otherAddresses: user.otherAddresses.find(
                  (address) =>
                    address.address === newAddressRefEl?.current?.value,
                )
                  ? user.otherAddresses
                  : [...user.otherAddresses, newAddressBookEntryObj],
              }
            : user,
        ),
      );

      clearFormFields(
        newAddressRefEl,
        cityRefEl,
        postCodeRefEl,
        countryRefEl,
        regionRefEl,
      );
    }
  };

  // edit this function and make it clean
  const handleOpenConfirmOrderPanelOnPaymentFormSubmit = (e) => {
    e.preventDefault();

    if (!isCheckoutPagePaymentMethodRadioBtnCheck) {
      setIsCheckoutPagePaymentMethodPanelOpen(false);
      setIsCheckoutPageConfirmOrderPanelOpen(true);
      setIsCheckoutPagePaymentMethodFormSubmit(true);
    } else {
      setIsCheckoutPagePaymentMethodPanelOpen(false);
      setIsCheckoutPageConfirmOrderPanelOpen(true);
      setIsCheckoutPagePaymentMethodFormSubmit(true);

      clearFormFields(
        cardNumberRefEl,
        cardHolderNameRefEl,
        cardMonthRefEl,
        cardYearRefEl,
        cardCVVRefEl,
      );
    }
  };

  const handleConfirmOrder = () => {
    const orderObj = {
      orderId: crypto.randomUUID(),
      productsNumber: checkLoggedUser?.cart?.length,
      totalPrice: totalCartItemsPrice,
      dateAdded: newDate,
      cashMethod: !isCheckoutPagePaymentMethodRadioBtnCheck
        ? 'Cash On Delivery'
        : 'Cash Online',

      orderAddress: newAddressInputValue
        ? newAddressInputValue
        : checkLoggedUser?.address,
      products: checkLoggedUser?.cart,
    };

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === checkLoggedUser?.email
          ? {
              ...user,

              cart: [],

              orderedProducts: [...user.orderedProducts, orderObj],
            }
          : user,
      );
    });

    setIsCheckoutPageAddressRadioBtnCheck(false);
    setIsCheckoutPagePaymentMethodRadioBtnCheck(false);
    setIsCheckoutPageDeliveryDetailsPanelOpen(false);
    setIsCheckoutPagePaymentMethodPanelOpen(false);
    setIsCheckoutPageConfirmOrderPanelOpen(false);
    setIsCheckoutPageDeliveryDetailsFormSubmit(false);
    setIsCheckoutPagePaymentMethodFormSubmit(false);

    navigate('/account/order-history');
  };

  useEffect(() => {
    if (
      !checkLoggedUser?.cart?.length ||
      isCheckoutPagePaymentMethodPanelOpen
    ) {
      setIsCheckoutPageDeliveryDetailsPanelOpen(false);
    } else {
      setIsCheckoutPageDeliveryDetailsPanelOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    checkLoggedUser?.cart?.length,
    setIsCheckoutPageDeliveryDetailsPanelOpen,
  ]);

  return (
    <SectionTag>
      <PageTitle text="Checkout" />

      <div>
        <Container styles="text-primaryColor">
          <CheckoutDropdownPanel
            isOpen={isCheckoutPageDeliveryDetailsPanelOpen}
            onClickHandler={handleToggleCheckoutPageDeliveryDetailsPanel}
            headerText="STEP 1: Delivery Details"
            parentStyles={
              !checkLoggedUser?.cart?.length
                ? 'cursor-default pointer-events-none'
                : 'cursor-pointer hover:text-thirdColor'
            }
            arrowSpanStyles={!checkLoggedUser?.cart?.length && 'hidden'}
          >
            {isCheckoutPageDeliveryDetailsPanelOpen ? (
              <div
                className={`visible overflow-hidden border border-t-0 border-[#ddd] p-2.5
                opacity-100 duration-300 xxs:p-[15px] ${
                  !isCheckoutPageAddressRadioBtnCheck
                    ? 'h-[164.5px] xxs:h-[203px]'
                    : 'h-[516px] xxs:h-[566px] sm:h-[447px]'
                }`}
              >
                <form
                  onSubmit={handleOpenPaymentPanelOnDeliveryDetailsFormSubmit}
                >
                  <CustomRadioBtn
                    parentStyles="xxs:mb-4 mb-2"
                    id="old-address"
                    name="address"
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    htmlFor="old-address"
                    labelText="I Want To Use An Existing Address"
                    checked={!isCheckoutPageAddressRadioBtnCheck}
                    onChangeHandler={handleOldAddressRadioBtnCheckChange}
                  />

                  <div
                    className={`mb-2 xxs:mb-4 ${
                      isCheckoutPageAddressRadioBtnCheck ? 'hidden' : 'block'
                    }`}
                  >
                    <input
                      className={`${inputDefaultStyles} w-full cursor-not-allowed outline-0`}
                      id="old-address-text"
                      name="old-address-text"
                      type="text"
                      value={checkLoggedUser?.address ?? ''}
                      readOnly={true}
                    />
                  </div>

                  <CustomRadioBtn
                    id="new-address"
                    name="address"
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    htmlFor="new-address"
                    labelText="I Want To Use A new Address"
                    onChangeHandler={handleNewAddressRadioBtnCheckChange}
                  />

                  <div
                    className={`mt-5 space-y-5 ${
                      !isCheckoutPageAddressRadioBtnCheck ? 'hidden' : 'block'
                    }`}
                  >
                    <LabelAndInput
                      divStyles="sm:grid-cols-12"
                      lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
                      sm:text-right"
                      inputStyles={`${inputDefaultStyles} col-span-10`}
                      htmlFor="checkoutNewAddressInp"
                      labelText="address"
                      placeholder="address"
                      refEl={newAddressRefEl}
                      id="checkoutNewAddressInp"
                      name="new-address"
                      required={isAddressRadioBtnChecked}
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
                      required={isAddressRadioBtnChecked}
                      refEl={cityRefEl}
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
                      required={isAddressRadioBtnChecked}
                      refEl={postCodeRefEl}
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
                      required={isAddressRadioBtnChecked}
                      refEl={countryRefEl}
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
                      required={isAddressRadioBtnChecked}
                      refEl={regionRefEl}
                    />
                  </div>

                  <MainButton
                    text="continue"
                    type="sumbit"
                    styles="ms-auto block bg-primaryColor text-white md:py-2.5
                    md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0
                    uppercase hover:bg-thirdColor duration-300 mt-5"
                  />
                </form>
              </div>
            ) : (
              <div
                className="invisible h-0 overflow-hidden p-2.5 opacity-0 duration-300
                xxs:p-[15px]"
              >
                <form
                  className={
                    !isCheckoutPageDeliveryDetailsPanelOpen && 'hidden'
                  }
                >
                  <CustomRadioBtn
                    id="old-address"
                    name="address"
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    checked={!isCheckoutPageAddressRadioBtnCheck}
                    htmlFor="old-address"
                    labelText="I Want To Use An Existing Address"
                    onChangeHandler={handleOldAddressRadioBtnCheckChange}
                  />

                  <div className="my-2 xxs:my-4">
                    <input
                      className={`${inputDefaultStyles} w-full cursor-not-allowed outline-0`}
                      id="old-address-text"
                      name="old-address-text"
                      type="text"
                      value={checkLoggedUser?.address ?? ''}
                      readOnly={true}
                    />
                  </div>

                  <CustomRadioBtn
                    id="new-address"
                    name="address"
                    onChangeHandler={handleNewAddressRadioBtnCheckChange}
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    htmlFor="new-address"
                    labelText="I Want To Use A new Address"
                  />

                  <div
                    className={`mt-5 space-y-5 ${
                      !isCheckoutPageAddressRadioBtnCheck ? 'hidden' : 'block'
                    }`}
                  >
                    <LabelAndInput
                      divStyles="sm:grid-cols-12"
                      lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
                        sm:text-right"
                      htmlFor="checkoutFirstNameInp"
                      labelText="Frist Name"
                      inputStyles={`${inputDefaultStyles} col-span-10`}
                      placeholder="first name"
                      id="checkoutFirstNameInp"
                      name="firstName"
                    />

                    <LabelAndInput
                      divStyles="sm:grid-cols-12"
                      lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
                      sm:text-right"
                      htmlFor="checkoutLastNameInp"
                      labelText="Last name"
                      inputStyles={`${inputDefaultStyles} col-span-10`}
                      placeholder="last name"
                      id="checkoutLastNameInp"
                      name="lastName"
                    />

                    <LabelAndInput
                      divStyles="sm:grid-cols-12"
                      lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
                        sm:text-right"
                      inputStyles={`${inputDefaultStyles} col-span-10`}
                      htmlFor="checkoutCompanyNameInp"
                      labelText="company"
                      placeholder="company"
                      id="checkoutCompanyNameInp"
                      name="comapny"
                    />

                    <LabelAndInput
                      divStyles="sm:grid-cols-12"
                      lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
                        sm:text-right"
                      inputStyles={`${inputDefaultStyles} col-span-10`}
                      htmlFor="checkoutAddressOneInp"
                      labelText="address 1"
                      placeholder="address 1"
                      id="checkoutAddressOneInp"
                      name="addressOne"
                    />

                    <LabelAndInput
                      divStyles="sm:grid-cols-12"
                      lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
                        sm:text-right"
                      inputStyles={`${inputDefaultStyles} col-span-10`}
                      htmlFor="checkoutAddressTwoInp"
                      labelText="address 2"
                      placeholder="address 2"
                      id="checkoutAddressTwoInp"
                      name="addressTwo"
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
                    />

                    <LabelAndInput
                      divStyles="sm:grid-cols-12"
                      lableStyles="col-span-2 mb-[5px] pe-0 sm:mb-0 sm:pe-[30px]
                        sm:text-right"
                      inputStyles={`${inputDefaultStyles} col-span-10`}
                      htmlFor="checkoutRegionInp"
                      labelText="Region / state"
                      placeholder="Region / state"
                      id="checkoutRegionInp"
                      name="region-state"
                    />
                  </div>

                  <MainButton
                    text="continue"
                    type="button"
                    styles="ms-auto block mt-5 bg-primaryColor text-white md:py-2.5
                    md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0
                    uppercase hover:bg-thirdColor duration-300"
                  />
                </form>
              </div>
            )}
          </CheckoutDropdownPanel>

          <CheckoutDropdownPanel
            parentDivStyles={`duration-300 ${
              !isCheckoutPageDeliveryDetailsPanelOpen
                ? 'xxs:-mt-[15px] -mt-[5px]'
                : 'xxs:mt-[15px] mt-[5px]'
            }`}
            headerText="STEP 2: Payment method"
            arrowSpanStyles={
              !isCheckoutPageDeliveryDetailsFormSubmit && 'hidden'
            }
            parentStyles={
              !isCheckoutPageDeliveryDetailsFormSubmit
                ? 'cursor-default pointer-events-none'
                : 'cursor-pointer hover:text-thirdColor'
            }
            isOpen={isCheckoutPagePaymentMethodPanelOpen}
            onClickHandler={handleToggleCheckoutPagePaymentMethodsPanel}
          >
            {isCheckoutPagePaymentMethodPanelOpen ? (
              <div
                className={`visible overflow-hidden border border-t-0 border-[#ddd]
                p-2.5 opacity-100 duration-300 xxs:p-[15px] ${
                  !isCheckoutPagePaymentMethodRadioBtnCheck
                    ? 'h-[123px] xxs:h-[147.5px]'
                    : 'h-[561px] xxxs:h-[611px] xxs:h-[607px]'
                }`}
              >
                <form onSubmit={handleOpenConfirmOrderPanelOnPaymentFormSubmit}>
                  <CustomRadioBtn
                    id="cash-payment"
                    name="payment-method"
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    htmlFor="cash-payment"
                    labelText="I Want To pay cash on delivery"
                    checked={!isCheckoutPagePaymentMethodRadioBtnCheck}
                    onChangeHandler={handleCashPaymentRadioBtnCheckChange}
                  />

                  <CustomRadioBtn
                    parentStyles="mt-2 xxs:mt-4"
                    id="online-payment"
                    name="payment-method"
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    htmlFor="online-payment"
                    labelText="I Want To pay online"
                    onChangeHandler={handleOnlinePaymentRadioBtnCheckChange}
                  />

                  <div
                    className={`mt-5 space-y-5 xxs:mt-5 ${
                      !isCheckoutPagePaymentMethodRadioBtnCheck
                        ? 'hidden'
                        : 'block'
                    }`}
                  >
                    <div>
                      <img
                        className="h-[150px] w-full object-cover xxxs:h-[200px] xxs:m-auto
                        xxs:h-[260px] xxs:w-[545px]"
                        src={creditCardImg}
                        alt={creditCardImg}
                      />
                    </div>

                    <div>
                      <input
                        className={`${inputDefaultStyles} m-auto mb-5 block
                        w-full text-sm outline-0 placeholder:uppercase xxs:w-[400px]`}
                        placeholder="card number"
                        type="number"
                        name="card-number"
                        id="card-number"
                        required={isPaymentRadioBtnChecked}
                        ref={cardNumberRefEl}
                      />

                      <input
                        className={`${inputDefaultStyles} m-auto block
                        w-full text-sm outline-0 placeholder:uppercase xxs:w-[400px]`}
                        placeholder="cardholder name"
                        type="text"
                        name="cardholder-name"
                        id="cardholder-name"
                        required={isPaymentRadioBtnChecked}
                        ref={cardHolderNameRefEl}
                      />
                    </div>

                    <div
                      className="flex flex-col items-center space-y-5 xxs:flex-row
                      xxs:justify-center xxs:space-x-5 xxs:space-y-0"
                    >
                      <input
                        className={`${inputDefaultStyles} w-40 text-sm outline-0
                        placeholder:uppercase xxs:w-[110px]`}
                        type="number"
                        placeholder="MM"
                        name="MM"
                        id="MM"
                        required={isPaymentRadioBtnChecked}
                        ref={cardMonthRefEl}
                      />

                      <input
                        className={`${inputDefaultStyles} w-40 text-sm outline-0
                        placeholder:uppercase xxs:w-[120px]`}
                        placeholder="yy"
                        type="number"
                        name="YY"
                        id="YY"
                        required={isPaymentRadioBtnChecked}
                        ref={cardYearRefEl}
                      />

                      <input
                        className={`${inputDefaultStyles} w-40 text-sm outline-0
                        placeholder:uppercase xxs:w-[130px]`}
                        placeholder="cvv"
                        type="number"
                        name="CVV"
                        id="CVV"
                        required={isPaymentRadioBtnChecked}
                        ref={cardCVVRefEl}
                      />
                    </div>
                  </div>

                  <MainButton
                    text="continue"
                    type="submit"
                    styles="ms-auto block bg-primaryColor mt-5 text-white md:py-2.5
                    md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0
                    uppercase hover:bg-thirdColor duration-300"
                  />
                </form>
              </div>
            ) : (
              <div
                className="invisible h-0 overflow-hidden p-2.5 opacity-0
                duration-300 xxs:p-[15px]"
              >
                <form
                  className={
                    !isCheckoutPagePaymentMethodPanelOpen ? 'hidden' : 'block'
                  }
                >
                  <CustomRadioBtn
                    id="cash-payment"
                    name="payment-method"
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    htmlFor="cash-payment"
                    labelText="I Want To pay cash"
                    checked={!isCheckoutPagePaymentMethodRadioBtnCheck}
                    onChangeHandler={handleCashPaymentRadioBtnCheckChange}
                  />

                  <CustomRadioBtn
                    parentStyles="mt-2 xxs:mt-4"
                    id="online-payment"
                    name="payment-method"
                    labelsStyles="xxs:ps-8 text-sm capitalize"
                    htmlFor="online-payment"
                    labelText="I Want To pay online"
                    onChangeHandler={handleOnlinePaymentRadioBtnCheckChange}
                  />

                  <div className="mt-5 space-y-5 xxs:mt-5">
                    <div>
                      <img
                        className="h-[150px] w-full object-cover xxxs:h-[200px] xxs:m-auto
                        xxs:h-[260px] xxs:w-[545px]"
                        src={creditCardImg}
                        alt={creditCardImg}
                      />
                    </div>

                    <div>
                      <input
                        className={`${inputDefaultStyles} m-auto mb-5 block
                        w-full text-sm outline-0 placeholder:uppercase xxs:w-[400px]`}
                        placeholder="card number"
                        type="number"
                        name="card-number"
                        id="card-number"
                        required={isPaymentRadioBtnChecked}
                        ref={cardNumberRefEl}
                      />

                      <input
                        className={`${inputDefaultStyles} m-auto block
                        w-full text-sm outline-0 placeholder:uppercase xxs:w-[400px]`}
                        placeholder="cardholder name"
                        type="text"
                        name="cardholder-name"
                        id="cardholder-name"
                        required={isPaymentRadioBtnChecked}
                        ref={cardHolderNameRefEl}
                      />
                    </div>

                    <div
                      className="flex flex-col items-center space-y-5 xxs:flex-row
                      xxs:justify-center xxs:space-x-5"
                    >
                      <input
                        className={`${inputDefaultStyles} w-40 text-sm outline-0
                        placeholder:uppercase xxs:w-[110px]`}
                        type="number"
                        placeholder="MM"
                        name="MM"
                        id="MM"
                        required={isPaymentRadioBtnChecked}
                        ref={cardMonthRefEl}
                      />

                      <input
                        className={`${inputDefaultStyles} w-40 text-sm outline-0
                        placeholder:uppercase xxs:w-[120px]`}
                        placeholder="yy"
                        type="number"
                        name="YY"
                        id="YY"
                        required={isPaymentRadioBtnChecked}
                        ref={cardYearRefEl}
                      />

                      <input
                        className={`${inputDefaultStyles} w-40 text-sm outline-0
                        placeholder:uppercase xxs:w-[130px]`}
                        placeholder="cvv"
                        type="number"
                        name="CVV"
                        id="CVV"
                        required={isPaymentRadioBtnChecked}
                        ref={cardCVVRefEl}
                      />
                    </div>
                  </div>

                  <MainButton
                    text="continue"
                    type="button"
                    styles="ms-auto block mt-5 bg-primaryColor text-white md:py-2.5
                    md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0
                    uppercase hover:bg-thirdColor duration-300"
                  />
                </form>
              </div>
            )}
          </CheckoutDropdownPanel>

          <CheckoutDropdownPanel
            parentDivStyles={`duration-300 ${
              !isCheckoutPagePaymentMethodPanelOpen
                ? 'xxs:-mt-[15px] -mt-[5px]'
                : 'xxs:mt-[15px] mt-[5px]'
            }`}
            headerText="STEP 3: Confirm Order"
            arrowSpanStyles={!isCheckoutPagePaymentMethodFormSubmit && 'hidden'}
            parentStyles={
              !isCheckoutPagePaymentMethodFormSubmit
                ? 'cursor-default pointer-events-none'
                : 'cursor-pointer hover:text-thirdColor'
            }
            isOpen={isCheckoutPageConfirmOrderPanelOpen}
            onClickHandler={handleToggleCheckoutPageConfirmOrderPanel}
          >
            {isCheckoutPageConfirmOrderPanelOpen ? (
              <div
                className="scrollbar visible h-[378px] overflow-auto border
                border-t-0 border-[#ddd] p-2.5 opacity-100 duration-300 xxs:p-[15px]"
              >
                <table className="w-full max-w-full">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Product Id</th>
                      <th>Product Quantity</th>
                      <th>Product Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {checkLoggedUser?.cart.map((product) => (
                      <tr key={product.id}>
                        <td>{product.title}</td>

                        <td>{product.id}</td>

                        <td>{product.quantity}</td>

                        <td>€{product.price}</td>
                      </tr>
                    ))}
                  </tbody>

                  <tfoot>
                    {checkLoggedUser?.cart.length !== 0 ? (
                      <tr>
                        <th>Total price after taxes</th>
                        <th colSpan="3">€{totalCartItemsPrice}</th>
                      </tr>
                    ) : (
                      <tr>
                        <td colSpan="4">There is no items in your cart!</td>
                      </tr>
                    )}
                  </tfoot>
                </table>

                <MainButton
                  text="confirm order"
                  type="button"
                  styles="ms-auto block bg-primaryColor mt-5 text-white md:py-2.5
                  md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0
                  uppercase hover:bg-thirdColor"
                  onClickHandler={handleConfirmOrder}
                />
              </div>
            ) : (
              <div
                className="scrollbar invisible -mb-[10px] h-0  overflow-y-auto
                p-2.5 opacity-0 duration-300 xxs:-mb-[30px] xxs:p-[15px]"
              >
                <table className="w-full max-w-full">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Product Id</th>
                      <th>Product Quantity</th>
                      <th>Product Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {checkLoggedUser?.cart.map((product) => (
                      <tr key={product.id}>
                        <td>{product.title}</td>

                        <td>{product.id}</td>

                        <td>{product.quantity}</td>

                        <td>{product.price}</td>
                      </tr>
                    ))}
                  </tbody>

                  <tfoot>
                    {checkLoggedUser?.cart.length !== 0 ? (
                      <tr>
                        <th>Total price after taxes</th>
                        <th colSpan="3">€{totalCartItemsPrice}</th>
                      </tr>
                    ) : (
                      <tr>
                        <td>There is no items in your cart!</td>
                      </tr>
                    )}
                  </tfoot>
                </table>

                <MainButton
                  text="confirm order"
                  type="button"
                  styles="ms-auto block bg-primaryColor mt-5 text-white md:py-2.5
                  md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0
                  uppercase hover:bg-thirdColor"
                />
              </div>
            )}
          </CheckoutDropdownPanel>
        </Container>
      </div>
    </SectionTag>
  );
}

export default CheckoutPage;
