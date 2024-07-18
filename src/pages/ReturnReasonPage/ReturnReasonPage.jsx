import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { isReturnedProductOpened } from '../../atoms/isReturnedProductOpened';
import { returnedProductComment } from '../../atoms/returnedProductComment';
import { reasonForReturnedProduct } from '../../atoms/reasonForReturnedProduct';

import useUserCart from '../../hooks/useUserCart';

import LabelAndInput from '../../components/LabelAndInput/LabelAndInput';
import CustomRadioBtn from '../../components/CustomRadioBtn/CustomRadioBtn';
import MainButton from '../../components/MainButton/MainButton';
import SectionTag from '../../components/SectionTag/SectionTag';
import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-1.5 max-h-10 text-primaryColor h-10`;

const urlWord = 'account';

function ReturnReasonPage() {
  const [isProductOpen, setIsProductOpen] = useRecoilState(
    isReturnedProductOpened,
  );
  const [productComment, setProductComment] = useRecoilState(
    returnedProductComment,
  );
  const [reasonForReturn, setReasonForReturn] = useRecoilState(
    reasonForReturnedProduct,
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const { pathParam1, pathParam2 } = useParams();

  const { pathname } = useLocation();

  const { checkLoggedUser, setLoggedUsers, currentUser } = useUserCart();

  const parentPathName = pathname.substring(1, urlWord.length + 1);

  const productOrderID = pathParam1.substring(pathParam1.indexOf('=') + 1);

  const productID = pathParam2.substring(pathParam2.indexOf('=') + 1);

  const existingReturnedProduct = checkLoggedUser?.returnedProducts.find(
    (product) =>
      product.orderId.startsWith(productOrderID) && product.id === +productID,
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmitted(true);

    if (!reasonForReturn) return;

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,

              returnedProducts: existingReturnedProduct
                ? user.returnedProducts.map((product) =>
                    product.id === existingReturnedProduct.id &&
                    product.orderId.startsWith(productOrderID)
                      ? {
                          ...product,
                          isReturnedBefore: true,
                          isProductOpened: isProductOpen,
                          productComment: productComment,
                        }
                      : product,
                  )
                : [...user.returnedProducts],
            }
          : user,
      );
    });

    navigate('/account/return-requests', { replace: true });

    setIsProductOpen(false);
    setProductComment('');
    setReasonForReturn('');
    setIsFormSubmitted(false);
  };

  const handleCheckProductOpenBtnChange = () => {
    setIsProductOpen(true);
  };

  const handleCheckProductNotOpenBtnChange = () => {
    setIsProductOpen(false);
  };

  const handleReturnedProductComment = (e) => {
    setProductComment(e.target.value);
  };

  const handleReturnedProductReason = (e) => {
    setReasonForReturn(e.target.id);
  };

  const handleNavigateBack = () => {
    navigate(-1);
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
          <div className="w-full px-[15px] md:m-auto md:w-3/4">
            <h3
              className="mb-5 border-b border-fourthColor py-[7px] text-lg
          capitalize leading-5 text-sixColor"
            >
              product information
            </h3>

            <form onSubmit={handleFormSubmit}>
              <LabelAndInput
                divStyles="sm:grid-cols-12 mb-5"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9 cursor-not-allowed`}
                htmlFor="product-name"
                id="product-name"
                labelText="product name"
                name="productName"
                value={existingReturnedProduct?.title ?? ''}
                readOnly={true}
              />

              <LabelAndInput
                divStyles="sm:grid-cols-12 mb-5"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9`}
                htmlFor="product-id"
                id="product-id"
                labelText="Order ID"
                name="productId"
                value={existingReturnedProduct?.orderId.toString() ?? ''}
                readOnly={true}
              />

              <LabelAndInput
                divStyles="sm:grid-cols-12 mb-5"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9`}
                htmlFor="quantity"
                id="quantity"
                labelText="Quantity"
                name="quantity"
                value={existingReturnedProduct?.quantity.toString() ?? ''}
                readOnly={true}
              />

              <div
                className={`mb-5 grid grid-cols-1 text-sm sm:grid-cols-12 ${
                  isFormSubmitted ? 'text-red-800' : ''
                }`}
              >
                <label className="col-span-3 mb-2 pt-2 sm:mb-0 sm:text-center">
                  Reason for Return
                </label>

                <div className="col-span-9 space-y-[7px]">
                  <CustomRadioBtn
                    parentStyles="w-fit"
                    id="dead-on-arrival"
                    htmlFor="dead-on-arrival"
                    name="return-reason"
                    labelsStyles="capitalize xxs:ps-7"
                    labelText="dead on arrival"
                    checked={reasonForReturn === 'dead-on-arrival'}
                    onChangeHandler={handleReturnedProductReason}
                  />

                  <CustomRadioBtn
                    parentStyles="w-fit"
                    id="faulty"
                    htmlFor="faulty"
                    name="return-reason"
                    labelsStyles="capitalize xxs:ps-7"
                    labelText="faulty, please supply details"
                    checked={reasonForReturn === 'faulty'}
                    onChangeHandler={handleReturnedProductReason}
                  />

                  <CustomRadioBtn
                    parentStyles="w-fit"
                    id="order-error"
                    htmlFor="order-error"
                    name="return-reason"
                    labelsStyles="capitalize xxs:ps-7"
                    labelText="order error"
                    checked={reasonForReturn === 'order-error'}
                    onChangeHandler={handleReturnedProductReason}
                  />

                  <CustomRadioBtn
                    parentStyles="w-fit"
                    id="other"
                    htmlFor="other"
                    name="return-reason"
                    labelsStyles="capitalize xxs:ps-7"
                    labelText="other, please supply details"
                    checked={reasonForReturn === 'other'}
                    onChangeHandler={handleReturnedProductReason}
                  />

                  <CustomRadioBtn
                    parentStyles="w-fit"
                    id="received-wrong-item"
                    htmlFor="received-wrong-item"
                    name="return-reason"
                    labelsStyles="capitalize xxs:ps-7"
                    labelText="Received Wrong Item"
                    checked={reasonForReturn === 'received-wrong-item'}
                    onChangeHandler={handleReturnedProductReason}
                  />

                  <p>You must select a return product reason!</p>
                </div>
              </div>

              <div className="mb-5 grid grid-cols-1 items-center sm:grid-cols-12">
                <label className="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center">
                  Product is opened
                </label>

                <div className="col-span-9 flex items-center space-x-5">
                  <CustomRadioBtn
                    parentStyles="w-fit"
                    id="product-opened"
                    htmlFor="product-opened"
                    name="is-product-open"
                    labelsStyles="text-sm capitalize xxs:ps-7"
                    labelText="yes"
                    checked={isProductOpen === true}
                    onChangeHandler={handleCheckProductOpenBtnChange}
                  />

                  <CustomRadioBtn
                    parentStyles="w-fit"
                    id="product-not-opened"
                    htmlFor="product-not-opened"
                    name="is-product-open"
                    labelsStyles="text-sm capitalize xxs:ps-7"
                    labelText="no"
                    checked={isProductOpen === false}
                    onChangeHandler={handleCheckProductNotOpenBtnChange}
                  />
                </div>
              </div>

              <div className="mb-5 grid grid-cols-1 sm:grid-cols-12">
                <label
                  className="col-span-3 mb-2 pt-2 text-sm sm:mb-0 sm:text-center"
                  htmlFor="comment"
                >
                  Faulty or other details
                </label>

                <textarea
                  className={`${inputDefaultStyles} scrollbar col-span-9 h-64 max-h-64
                  min-h-[100px] outline-0`}
                  placeholder="Faulty or other details"
                  id="comment"
                  value={productComment}
                  onChange={handleReturnedProductComment}
                />
              </div>

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
                  text="submit"
                  type="submit"
                  styles="bg-primaryColor text-white md:py-2.5 md:px-[30px] duration-300
              py-[7px] px-5 text-sm border-0 outline-0 uppercase hover:bg-thirdColor"
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default ReturnReasonPage;
