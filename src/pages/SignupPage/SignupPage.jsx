import { Link } from 'react-router-dom';
import { useRef } from 'react';
import {
  isPassConfNumbersInSignupPage,
  isPassNumbersInSignupPage,
} from '../../atoms/showPassword';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useIsOpen } from '../../hooks/useIsOpen';
import { auth, signUp } from '../../firebase';

import isSignupAccLoading from '../../atoms/isSigningupAccLoading';
import signupError from '../../atoms/signupInpError';
import loggedUsersInfo from '../../atoms/currentLoggedUserInfo';
import useUseEffectToNavigate from '../../hooks/useUseEffectToNavigate';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import Input from '../../components/Input/Input';
import LabelAndInput from '../../components/LabelAndInput/LabelAndInput';
import CustomRadioBtn from '../../components/CustomRadioBtn/CustomRadioBtn';

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-2.5 max-h-10 text-primaryColor`;

function SignupPage() {
  const [isSignupPagePassNums, setIsSignupPagePassNums] = useRecoilState(
    isPassNumbersInSignupPage,
  );
  const [isSignupPagePassConfNums, setIsSignupPagePassConfNums] =
    useRecoilState(isPassConfNumbersInSignupPage);
  const [signupErrorMsg, setSignupErrorMsg] = useRecoilState(signupError);
  const [isSignupLoading, setIsSignupLoading] =
    useRecoilState(isSignupAccLoading);

  const setLoggedUsers = useSetRecoilState(loggedUsersInfo);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const mobileRef = useRef();
  const passRef = useRef();
  const passConfirmationRef = useRef();
  const radioInpRef = useRef();

  const handleCreateAccount = async () => {
    try {
      setSignupErrorMsg('');
      setIsSignupLoading(true);

      await signUp(auth, emailRef.current.value, passRef.current.value);
    } catch {
      setSignupErrorMsg('Email is already exist');
    } finally {
      setIsSignupLoading(false);
    }
  };

  const handleCheckingTerms = () => {
    !radioInpRef.current.checked &&
      setSignupErrorMsg('Your should agree to the terms and conditions.');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      id: crypto.randomUUID(),
      firstName: firstNameRef?.current?.value,
      lastName: lastNameRef?.current?.value,
      email: emailRef?.current?.value,
      address: addressRef?.current?.value,
      otherAddresses: [],
      returnedProducts: [],
      mobile: mobileRef?.current?.value,
      password: passRef?.current?.value,
      wishList: [],
      cart: [],
      orderedProducts: [],
    };

    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,4}$/.test(
        emailRef.current.value,
      )
    ) {
      return setSignupErrorMsg('Please provide a valid email address');
    } else if (passRef.current.value !== passConfirmationRef.current.value) {
      return setSignupErrorMsg('Passwords do not match');
    } else if (!/[A-Z]/.test(passRef?.current?.value)) {
      return setSignupErrorMsg(
        'Password must contain at least one uppercase letter.',
      );
    } else if (!/[a-z]/.test(passRef?.current?.value)) {
      return setSignupErrorMsg(
        'Password must contain at least one lowercase letter.',
      );
    } else if (!/\d/.test(passRef?.current?.value)) {
      return setSignupErrorMsg('Password must contain at least one digit.');
    } else if (!/[!@#$%^&*]/.test(passRef?.current?.value)) {
      return setSignupErrorMsg(
        'Password must contain at least one special character (!@#$%^&*).',
      );
    } else {
      handleCreateAccount();

      setLoggedUsers((prevUsers) =>
        prevUsers.find((user) => user?.email === emailRef.current.value)?.email
          ? prevUsers
          : [...prevUsers, userInfo],
      );

      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
      emailRef.current.value = '';
      addressRef.current.value = '';
      mobileRef.current.value = '';
      passRef.current.value = '';
      passConfirmationRef.current.value = '';
      radioInpRef.current.checked = false;
    }
  };

  const handleShowPassword = useIsOpen(
    isSignupPagePassNums,
    setIsSignupPagePassNums,
  );

  const handleShowPasswordConf = useIsOpen(
    isSignupPagePassConfNums,
    setIsSignupPagePassConfNums,
  );

  useUseEffectToNavigate();

  return (
    <SectionTag>
      <PageTitle text="sign up" />

      <div>
        <Container>
          <div
            className="border border-fourthColor p-[15px]
            text-primaryColor sm:m-auto sm:w-3/4"
          >
            <p className="mb-4 text-sm">
              Already have an account?{' '}
              <Link className="hover:text-thirdColor" to="/signin">
                Log in instead!
              </Link>
            </p>

            {signupErrorMsg && (
              <p
                className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 bg-red-200 text-red-800 ${
                  signupErrorMsg && 'px-4 py-1.5'
                }`}
              >
                {signupErrorMsg && signupErrorMsg}
              </p>
            )}

            <form
              className="text-sm text-primaryColor"
              onSubmit={handleFormSubmit}
            >
              <LabelAndInput
                divStyles="sm:grid-cols-12"
                lableStyles="col-span-3 mb-2 font-medium leading-[30px]
                sm:mb-0"
                inputStyles={`${inputDefaultStyles} col-span-6`}
                htmlFor="signupFirstNameInp"
                labelText="First Name"
                id="signupFirstNameInp"
                name="firstName"
                required
                refEl={firstNameRef}
              />

              <LabelAndInput
                divStyles="my-6 sm:grid-cols-12"
                lableStyles="col-span-3 mb-2 font-medium leading-[30px]
                sm:mb-0"
                inputStyles={`${inputDefaultStyles} col-span-6`}
                htmlFor="signupLastNameInp"
                labelText="Last Name"
                id="signupLastNameInp"
                name="lastName"
                required
                refEl={lastNameRef}
              />

              <LabelAndInput
                divStyles="sm:grid-cols-12"
                lableStyles="col-span-3 mb-2 font-medium leading-[30px]
                sm:mb-0"
                inputStyles={`${inputDefaultStyles} col-span-6`}
                htmlFor="signupEmailInput"
                labelText="Email"
                id="signupEmailInput"
                name="email"
                required
                refEl={emailRef}
                type="email"
              />

              <LabelAndInput
                divStyles="my-6 sm:grid-cols-12"
                lableStyles="col-span-3 mb-2 font-medium leading-[30px]
                sm:mb-0"
                inputStyles={`${inputDefaultStyles} col-span-6`}
                htmlFor="signupAddressInput"
                labelText="Address"
                id="signupAddressInput"
                name="Address"
                required
                refEl={addressRef}
              />

              <div className="mb-6 grid grid-cols-1 items-center sm:grid-cols-12">
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="signupMobileNumberInp"
                >
                  Mobile
                </label>

                <div className="col-span-6">
                  <div className="mb-1">
                    <Input
                      styles={inputDefaultStyles}
                      id="signupMobileNumberInp"
                      type="tel"
                      name="mobile"
                      pattern="\d{3}-\d{4}-\d{4}"
                      required
                      refEl={mobileRef}
                    />
                  </div>

                  <span>Mobile must be in this format 000 - 0000 - 0000</span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 items-center sm:grid-cols-12">
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="signupPasswordInp"
                >
                  Password
                </label>

                <div className="col-span-6">
                  <div className="mb-1 flex items-center">
                    <Input
                      styles={inputDefaultStyles}
                      id="signupPasswordInp"
                      type={isSignupPagePassNums ? 'text' : 'password'}
                      name="password"
                      required
                      refEl={passRef}
                      minLength="8"
                    />

                    <ShopNowBtn
                      styles="border-none bg-primaryColor px-4 py-2.5 text-sm
                      capitalize text-white outline-0"
                      text="Show"
                      onClick={handleShowPassword}
                    />
                  </div>

                  <span>
                    Password length must be &gt;&#61; 8, and contain at least
                    capital and small letter, and special character (!@#$%^&*).
                  </span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 items-center sm:grid-cols-12">
                <label
                  className="col-span-3 mb-2 font-medium capitalize leading-[30px]
                  sm:mb-0"
                  htmlFor="signupPasswordConfirmationInp"
                >
                  password confirmation
                </label>

                <div className="col-span-6 flex items-center">
                  <Input
                    styles={inputDefaultStyles}
                    id="signupPasswordConfirmationInp"
                    type={isSignupPagePassConfNums ? 'text' : 'password'}
                    name="password"
                    required
                    refEl={passConfirmationRef}
                    minLength="8"
                  />

                  <ShopNowBtn
                    styles="border-none bg-primaryColor px-4 py-2.5 text-sm
                    capitalize text-white outline-0"
                    text="Show"
                    onClick={handleShowPasswordConf}
                  />
                </div>
              </div>

              <CustomRadioBtn
                parentStyles="mb-6 sm:m-auto sm:w-1/2"
                id="terms-agreement"
                name="terms-agreement"
                labelsStyles="font-medium"
                htmlFor="terms-agreement"
                labelText="I agree to the terms and conditions and the privacy policy"
                refEl={radioInpRef}
                required
              />

              <div className="text-right">
                <ShopNowBtn
                  isDisabled={isSignupLoading}
                  type="submit"
                  text={!isSignupLoading ? 'sign up' : 'Loading...'}
                  styles={`border-none bg-primaryColor px-[30px] py-2.5
                  text-sm uppercase text-white outline-0 duration-300
                  ${
                    isSignupLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-thirdColor'
                  }`}
                  onClick={handleCheckingTerms}
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
