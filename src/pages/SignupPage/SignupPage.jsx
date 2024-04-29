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

const defaultStyles = `max-h-10 w-full border
border-fourthColor px-[15px] py-2.5
text-primaryColor outline-0`;

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
      mobile: mobileRef?.current?.value,
      password: passRef?.current?.value,
      wishList: [],
      cart: [],
    };

    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,4}$/.test(
        emailRef.current.value,
      )
    ) {
      return setSignupErrorMsg('Please provide a valid email address');
    } else if (passRef.current.value !== passConfirmationRef.current.value) {
      return setSignupErrorMsg('Password do not match');
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
              <div
                className="grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="firstNameInp"
                >
                  First Name
                </label>

                <input
                  className={`col-span-6 ${defaultStyles}`}
                  type="text"
                  id="firstNameInp"
                  name="firstName"
                  required
                  ref={firstNameRef}
                />
              </div>

              <div
                className="my-6 grid grid-cols-1
                items-center sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="lastNameInp"
                >
                  Last Name
                </label>

                <input
                  className={`col-span-6 ${defaultStyles}`}
                  type="text"
                  id="lastNameInp"
                  name="lastName"
                  required
                  ref={lastNameRef}
                />
              </div>

              <div
                className="grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="regEmailInput"
                >
                  Email
                </label>

                <input
                  className={`col-span-6 ${defaultStyles}`}
                  type="email"
                  id="regEmailInput"
                  name="email"
                  required
                  ref={emailRef}
                />
              </div>

              <div
                className="my-6 grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium leading-[30px]
                  sm:mb-0"
                  htmlFor="mobileNumberInp"
                >
                  Mobile
                </label>

                <input
                  className={`col-span-6 ${defaultStyles}`}
                  type="tel"
                  id="mobileNumberInp"
                  name="mobile"
                  pattern="\d{3}-\d{4}-\d{4}"
                  required
                  ref={mobileRef}
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

                <div className="col-span-6 ">
                  <div className="mb-1 flex items-center">
                    <input
                      className={defaultStyles}
                      id="regPasswordInp"
                      type={isSignupPagePassNums ? 'text' : 'password'}
                      name="password"
                      required
                      ref={passRef}
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

              <div
                className="mb-6 grid grid-cols-1 items-center
                sm:grid-cols-12"
              >
                <label
                  className="col-span-3 mb-2 font-medium capitalize
                  leading-[30px] sm:mb-0"
                  htmlFor="regPasswordConfirmationInp"
                >
                  password confirmation
                </label>

                <div className="col-span-6 flex items-center">
                  <input
                    className={defaultStyles}
                    id="regPasswordConfirmationInp"
                    type={isSignupPagePassConfNums ? 'text' : 'password'}
                    name="password"
                    required
                    ref={passConfirmationRef}
                    minLength="8"
                  />

                  <ShopNowBtn
                    styles="border-none
                    bg-primaryColor px-4 py-2.5 text-sm
                    capitalize text-white outline-0"
                    text="Show"
                    onClick={handleShowPasswordConf}
                  />
                </div>
              </div>

              <div className="mb-6 sm:m-auto sm:w-1/2">
                <input
                  id="terms-agreement"
                  name="terms-agreement"
                  type="radio"
                  ref={radioInpRef}
                  required
                />

                <label
                  className="custom-radio-label font-medium"
                  htmlFor="terms-agreement"
                >
                  I agree to the terms and conditions and the privacy policy
                </label>
              </div>

              <div className="text-right">
                <ShopNowBtn
                  isDisabled={isSignupLoading}
                  type="submit"
                  text="sign up"
                  styles={`border-none bg-primaryColor px-[30px] py-2.5
                  text-sm uppercase text-white outline-0 duration-300
                  ${
                    isSignupLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-thirdColor'
                  }`}
                  onClick={handleCheckingTerms}
                >
                  sign up
                </ShopNowBtn>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default SignupPage;
