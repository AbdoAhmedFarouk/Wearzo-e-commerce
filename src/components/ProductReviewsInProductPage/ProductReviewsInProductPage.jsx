import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PropTypes } from 'prop-types';

import { isProductPageLinksStepsNaved } from '../../atoms/linksNavigationSteps';
import clickedProduct from '../../atoms/product';

import useClearFormFields from '../../hooks/useClearFormFields';

import LabelAndInput from '../LabelAndInput/LabelAndInput';
import RatingStars from '../RatingStars/RatingStars';
import HoveringRatingStars from '../HoveringRatingStars/HoveringRatingStars';
import ShopNowBtn from '../ShopNowBtn/ShopNowBtn';
import useUserCart from '../../hooks/useUserCart';

ProductReviewsInProductPage.propTypes = {
  refEl: PropTypes.object,
  urlProductId: PropTypes.string,
};

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-1.5 max-h-10 text-primaryColor h-10`;

const dateObj = new Date();
const month = dateObj.getMonth() + 1;
const day = dateObj.getDate();
const year = dateObj.getFullYear();

const newDate = `${day}/${month}/${year}`;

function ProductReviewsInProductPage({ refEl, urlProductId }) {
  const [step, setStep] = useRecoilState(isProductPageLinksStepsNaved);

  const [userRating, setUserRating] = useState(0);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const chosenProduct = useRecoilValue(clickedProduct);

  const userReviewName = useRef();
  const userReview = useRef();

  const { checkLoggedUser, setLoggedUsers, currentUser } = useUserCart();

  const clearFormFields = useClearFormFields();

  const existingProductInUserCart = checkLoggedUser.cart.find(
    (product) => product.id === +urlProductId,
  );

  const handleDescriptionNavigation = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleReviewsNavigation = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleSubmitReviewForm = (e) => {
    e.preventDefault();

    if (
      userReview.current.value === '' ||
      userReviewName.current.value === '' ||
      userRating === 0
    ) {
      setError('Warning: Please select a review rating!');
      return;
    }

    if (existingProductInUserCart) {
      setSuccessMsg('Thank you for your review.');
    } else {
      setSuccessMsg(
        'Thank you for your review. It has been submitted to the webmaster for approval.',
      );
    }
    setError('');

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,

              cart: existingProductInUserCart
                ? user.cart.map((item) =>
                    item.id === +urlProductId
                      ? {
                          ...item,
                          review: userReview?.current?.value,

                          rate: userRating,
                        }
                      : item,
                  )
                : [...user.cart],
            }
          : user,
      );
    });

    clearFormFields(userReviewName, userReview);
  };

  return (
    <div
      className="mt-[10px] w-full sm:mt-5 md:mt-[30px] lg:mt-20
        2xl:mt-[50px]"
    >
      <ul
        className="flex items-center justify-center space-x-4 border-t
        border-fourthColor text-center text-sm font-medium
        leading-5 text-secondaryColor xxs:space-x-11 lg:text-base"
      >
        <li onClick={handleDescriptionNavigation}>
          <button
            className={`hover-animation relative py-2 uppercase xxs:py-2.5 md:py-[15px] ${
              step <= 1 ? 'steps-active' : 'links-hover-effect'
            }`}
          >
            description
          </button>
        </li>

        <li onClick={handleReviewsNavigation}>
          <button
            className={`hover-animation relative py-2 uppercase xxs:py-2.5 md:py-[15px] ${
              step >= 2 ? 'steps-active' : 'links-hover-effect'
            }`}
            ref={refEl}
          >
            reviews
          </button>
        </li>
      </ul>

      <div
        className="border-b border-t border-fourthColor
          p-[15px] pb-[5px] text-base text-secondaryColor md:px-0
          md:py-7 md:pb-7"
      >
        {step <= 1 && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem dignissimos et, ipsa distinctio unde libero delectus
            ut molestiae nesciunt non sequi veniam. Molestias assumenda nemo non
            dolor veniam quibusdam repellat cupiditate, perferendis odit aliquam
            nihil nostrum excepturi nulla? Eaque totam perferendis doloremque
            tempora illo voluptas vel ratione at maxime, incidunt id sequi
            asperiores harum cumque ea eligendi quasi dolorum quidem accusantium
            pariatur! Nesciunt sint, tenetur totam quo velit tempore quae porro?
            Distinctio, vero. Quos minus magni molestiae officia dolore autem, a
            voluptates ullam tempore est enim reiciendis similique ea
            consequatur repellat aspernatur minima eligendi laborum blanditiis
            rem incidunt nesciunt perferendis ut dolores. Sit assumenda, tenetur
            sint nihil veritatis consequuntur perferendis unde ut nesciunt
            cumque quidem a ullam quam et nostrum hic, facere obcaecati aut
            perspiciatis fugiat. Velit, eligendi iste tempore architecto, illum
            laboriosam asperiores sed repudiandae facere aut numquam! Quibusdam
            reprehenderit repellat delectus sit voluptas esse iure! Ab natus
            ratione ipsam quis voluptas. Numquam ex facilis animi repellat
            commodi, modi autem quia debitis voluptatem optio vel iure sunt
            facere atque consequuntur vitae non fuga. Culpa illo ab nobis et, at
            maxime iusto reprehenderit odio vitae eum dolorem magni qui quos
            praesentium est cum iste blanditiis quae quas! Cum, explicabo
            magnam.
          </p>
        )}

        {step >= 2 && (
          <>
            {existingProductInUserCart?.review ? (
              <table className="w-full max-w-full">
                <thead>
                  <tr className="text-sm">
                    <th className="w-1/2 font-medium capitalize">test</th>

                    <th className="w-1/2 font-medium">{newDate}</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan="2">
                      {existingProductInUserCart?.review}

                      <span>
                        <RatingStars
                          styles="mt-1.5 flex items-center justify-start text-base
                          text-eighthColor md:mt-2.5"
                          ratingLength={
                            existingProductInUserCart?.rate ||
                            chosenProduct.rating.rate
                          }
                        />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>This product has no reviews yet.</p>
            )}

            {error ? (
              <p
                className={`m-auto mt-5 w-fit rounded-[4px]
                border-0 ${error && 'bg-red-200 px-4 py-1.5 text-red-800'}`}
              >
                {error && error}
              </p>
            ) : (
              successMsg && (
                <p
                  className={`m-auto mt-5 w-fit rounded-[4px]
                border-0 ${
                  successMsg && 'bg-green-200 px-4 py-1.5 text-green-800'
                }`}
                >
                  {successMsg && successMsg}
                </p>
              )
            )}

            <form onSubmit={handleSubmitReviewForm}>
              <h2
                className="mb-[15px] mt-[25px] text-lg font-medium capitalize
                leading-5 text-primaryColor"
              >
                Write A Review
              </h2>

              <div>
                <LabelAndInput
                  divStyles="sm:grid-cols-12 mb-5"
                  lableStyles="col-span-2 text-sm"
                  inputStyles={`${inputDefaultStyles} col-span-10`}
                  htmlFor="reviewName"
                  id="reviewName"
                  labelText="your name"
                  name="name"
                  type="text"
                  refEl={userReviewName}
                />

                <div className="mb-5 grid grid-cols-1 text-sm sm:grid-cols-12">
                  <label className="col-span-2 text-sm" htmlFor="review">
                    Faulty or other details
                  </label>

                  <textarea
                    className={`${inputDefaultStyles} scrollbar col-span-10 max-h-40
                    min-h-[80px] outline-0`}
                    id="review"
                    name="review"
                    minLength="25"
                    ref={userReview}
                  />
                </div>

                <div
                  className="grid grid-cols-1 items-center text-sm capitalize
                  sm:grid-cols-12"
                >
                  <label className="col-span-2">rating</label>

                  <div className="flex w-fit items-center space-x-3">
                    <span>bad</span>

                    <HoveringRatingStars onSetRating={setUserRating} />

                    <span>good</span>
                  </div>
                </div>
              </div>

              <ShopNowBtn
                text="continue"
                type="submit"
                styles="ms-auto block bg-primaryColor mt-5 text-white md:py-2.5
                md:px-[30px] py-[7px] px-5 text-sm border-0 outline-0 uppercase
                hover:bg-thirdColor"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductReviewsInProductPage;
