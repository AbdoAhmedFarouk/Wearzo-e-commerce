import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useIsOpen } from '../../hooks/useIsOpen';
import { isPassNumbersInSigninPage } from '../../atoms/showPassword';
import { auth, signIn } from '../../firebase';

import useUseEffectToNavigate from '../../hooks/useUseEffectToNavigate';
import isSigninAccLoading from '../../atoms/isSigninAccLoading';
import signinError from '../../atoms/signinInpError';

import SectionTag from '../../components/SectionTag/SectionTag';
import Container from '../../components/Container/Container';
import MainButton from '../../components/MainButton/MainButton';
import PageTitle from '../../components/PageTitle/PageTitle';
import Input from '../../components/Input/Input';
import LabelAndInput from '../../components/LabelAndInput/LabelAndInput';

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-2.5 max-h-10 text-primaryColor`;

function SigninPage() {
  const [isSigninPagePassNums, setIsSigninPagePassNums] = useRecoilState(
    isPassNumbersInSigninPage,
  );
  const [isSigninLoading, setIsSigninLoading] =
    useRecoilState(isSigninAccLoading);
  const [signinErrorMsg, setSigninErrorMsg] = useRecoilState(signinError);

  const emailRef = useRef();
  const passRef = useRef();

  const handleLogin = async () => {
    try {
      setSigninErrorMsg('');
      setIsSigninLoading(true);

      await signIn(auth, emailRef.current.value, passRef.current.value);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setSigninErrorMsg('Email not found');
      } else {
        setSigninErrorMsg(
          'Failed to login, Please check your email address and password then try again.',
        );
      }
    } finally {
      setIsSigninLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleLogin();
  };

  const handleShowPassword = useIsOpen(
    isSigninPagePassNums,
    setIsSigninPagePassNums,
  );

  useUseEffectToNavigate();

  return (
    <SectionTag>
      <PageTitle text="sign in" />

      <div>
        <Container>
          <div
            className="m-auto border border-fourthColor p-[15px] text-center
              text-primaryColor sm:w-3/4"
          >
            <p
              className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 bg-red-200 text-red-800 ${
                  signinErrorMsg && 'px-4 py-1.5'
                }`}
            >
              {signinErrorMsg && signinErrorMsg}
            </p>

            <form onSubmit={handleFormSubmit}>
              <LabelAndInput
                divStyles="sm:grid-cols-10"
                lableStyles="col-span-3 mb-2 text-left text-sm font-medium capitalize
                sm:mb-0"
                inputStyles={`col-span-5 ${inputDefaultStyles}`}
                labelText="Email"
                htmlFor="signinEmailInp"
                id="signinEmailInp"
                type="email"
                name="email"
                required
                refEl={emailRef}
              />

              <div className="my-4 grid grid-cols-1 items-center sm:grid-cols-10">
                <label
                  className="col-span-3 mb-2 text-left text-sm font-medium capitalize
                  sm:mb-0"
                  htmlFor="signinPasswordInp"
                >
                  Password
                </label>

                <div className="col-span-5 flex items-center">
                  <Input
                    styles={inputDefaultStyles}
                    id="signinPasswordInp"
                    type={isSigninPagePassNums ? 'text' : 'password'}
                    name="password"
                    required
                    refEl={passRef}
                  />

                  <MainButton
                    styles="border-none bg-primaryColor px-4 py-2.5 text-sm capitalize
                    text-white outline-0"
                    onClickHandler={handleShowPassword}
                    text={isSigninPagePassNums ? 'hide' : 'show'}
                  />
                </div>
              </div>

              <div className="mb-[15px] text-sm">
                <Link className="hover:text-thirdColor" to="/password-recovery">
                  Forgot your password?
                </Link>
              </div>

              <div className="mb-[18px]">
                <MainButton
                  isDisabled={isSigninLoading}
                  text={isSigninLoading ? 'Loading...' : 'sign in'}
                  styles={`border-none py-2.5 text-sm
                    bg-primaryColor px-[30px] uppercase
                    text-white outline-0 
                    duration-300 ${
                      isSigninLoading
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-thirdColor'
                    }`}
                  type="submit"
                />
              </div>

              <div
                className="relative pt-[18px] text-base leading-5
                before:absolute before:left-0 before:top-0
                before:h-px before:w-full before:bg-fourthColor"
              >
                <Link className="hover:text-thirdColor" to="/signup">
                  No account? Create one here
                </Link>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default SigninPage;
