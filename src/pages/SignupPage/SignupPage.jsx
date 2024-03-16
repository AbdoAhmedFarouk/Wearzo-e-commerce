import { NavLink } from 'react-router-dom';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import Input from '../../components/Input/Input';

function SignupPage() {
  return (
    <SectionTag>
      <PageTitle text="signup" />

      <div>
        <Container>
          <div
            className="border border-fourthColor p-[15px]
            text-primaryColor sm:m-auto sm:w-3/4"
          >
            <p className="mb-4 text-sm">
              Already have an account?{' '}
              <NavLink className="hover:text-thirdColor" to="/signin">
                Log in instead!
              </NavLink>
            </p>

            {/* onSubmit={(e) => handleFormSubmit(e)} */}
            <form className="text-sm text-primaryColor">
              <div
                className="mb-6 grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                >
                  Social title
                </label>

                <div className="col-span-6 flex items-center">
                  <div className="me-5">
                    <input
                      id="titleMrRadioInput"
                      name="gender"
                      type="radio"
                      required
                    />

                    <label
                      className="custom-radio-label after:bg-primaryColor"
                      htmlFor="titleMrRadioInput"
                    >
                      Mr.
                    </label>
                  </div>

                  <div>
                    <input
                      id="titleMrsRadioInput"
                      name="gender"
                      type="radio"
                      required
                    />

                    <label
                      className="custom-radio-label after:bg-primaryColor"
                      htmlFor="titleMrsRadioInput"
                    >
                      Mrs.
                    </label>
                  </div>
                </div>
              </div>

              <div
                className="mb-6 grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="regFirstNameInp"
                >
                  First name
                </label>

                <div className="col-span-6">
                  <Input id="regFirstNameInp" name="firstName" required />

                  <span>
                    Only letters and the dot (.) character, followed by a space,
                    are allowed.
                  </span>
                </div>
              </div>

              <div
                className="mb-6 grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="regLastNameInp"
                >
                  Last name
                </label>

                <div className="col-span-6">
                  <Input id="regLastNameInp" name="lastName" required />

                  <span>
                    Only letters and the dot (.) character, followed by a space,
                    are allowed.
                  </span>
                </div>
              </div>

              <div
                className="mb-6 grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="regEmailInput"
                >
                  Email
                </label>

                <Input
                  styles="col-span-6 max-h-10 border
                  border-fourthColor px-[15px] py-2.5
                  text-primaryColor outline-0"
                  type="email"
                  id="regEmailInput"
                  name="email"
                  required
                />
              </div>

              <div
                className="mb-6 grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="regPasswordInp"
                >
                  Password
                </label>

                <div className="col-span-6 flex items-center">
                  <Input
                    id="regPasswordInp"
                    type="password"
                    name="password"
                    required
                  />

                  <ShopNowBtn
                    styles="border-none
                    bg-primaryColor px-4 py-2.5 text-sm
                    capitalize text-white outline-0"
                    text="Show"
                  />
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 sm:grid-cols-12">
                <label
                  className="col-span-3 mb-2 pt-0 font-medium
                  leading-[30px] sm:mb-0 sm:pt-2.5"
                  htmlFor="birthdateInp"
                >
                  Birthdate
                </label>

                <div className="col-span-6">
                  <Input
                    styles="max-h-10 w-full border
                    border-fourthColor px-[15px] py-2.5
                    uppercase text-primaryColor outline-0"
                    id="birthdateInp"
                    name="birthdate"
                    type="date"
                    required
                  />

                  <span>(E.g.: 05/31/1970)</span>
                </div>

                <div
                  className="col-span-3 mt-2 pt-0 capitalize
                  sm:ms-[30px] sm:mt-0 sm:pt-2.5"
                >
                  <span>optional</span>
                </div>
              </div>

              <div className="mb-6 sm:m-auto sm:w-1/2">
                <div className="mb-4">
                  <input
                    id="receive-offers"
                    name="receive-offers"
                    type="radio"
                    required
                  />

                  <label
                    className="custom-radio-label font-medium"
                    htmlFor="receive-offers"
                  >
                    Receive offers from our partners
                  </label>
                </div>

                <div className="mb-4">
                  <input
                    id="data-privacy"
                    name="data-privacy"
                    type="radio"
                    required
                  />

                  <label
                    className="custom-radio-label font-medium"
                    htmlFor="data-privacy"
                  >
                    Customer data privacy <br />
                    <em>
                      The personal data you provide is used to answer queries,
                      process orders or allow access to specific information.
                      You have the right to modify and delete all the personal
                      information found in the My Account page.
                    </em>
                  </label>
                </div>

                <div className="mb-4">
                  <input
                    id="newsletter-signup"
                    name="newsletter-signup"
                    type="radio"
                    required
                  />

                  <label
                    className="custom-radio-label font-medium"
                    htmlFor="newsletter-signup"
                  >
                    Sign up for our newsletter You may unsubscribe at any
                    moment. For that purpose, please find our contact info in
                    the legal notice.
                  </label>
                </div>

                <div>
                  <input
                    id="terms-agreement"
                    name="terms-agreement"
                    type="radio"
                    required
                  />

                  <label
                    className="custom-radio-label font-medium"
                    htmlFor="terms-agreement"
                  >
                    I agree to the terms and conditions and the privacy policy
                  </label>
                </div>
              </div>

              <div className="text-right">
                <ShopNowBtn
                  text="save"
                  styles="border-none hover:bg-thirdColor
                  bg-primaryColor px-[30px] py-2.5 text-sm
                  text-white outline-0 duration-300
                  uppercase"
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default SignupPage;
