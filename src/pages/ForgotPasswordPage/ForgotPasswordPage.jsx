import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { resetPasswordErrorMessage } from '../../atoms/ResetPasswordErrorMessage';
import { resetPasswordSuccessMessage } from '../../atoms/resetPasswordSuccessMessage';
import { isResetPasswordLoading } from '../../atoms/isResetPasswordLoading';
import { auth, resetPassword } from '../../firebase';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';

import { IoIosArrowBack } from 'react-icons/io';
import { useRecoilState } from 'recoil';

function ForgotPasswordPage() {
  const [resetPasswordErrorMsg, setResetPasswordErrorMsg] = useRecoilState(
    resetPasswordErrorMessage,
  );
  const [resetPasswordSuccessMsg, setResetPasswordSuccessMsg] = useRecoilState(
    resetPasswordSuccessMessage,
  );
  const [isResetPassLoading, setIsResetPassLoading] = useRecoilState(
    isResetPasswordLoading,
  );
  const resetPasswordInp = useRef();

  const handleResetPassword = async () => {
    try {
      setResetPasswordErrorMsg('');
      setResetPasswordSuccessMsg('');
      setIsResetPassLoading(true);

      await resetPassword(auth, resetPasswordInp.current.value);

      setResetPasswordSuccessMsg('Check your inbox for further instructions.');
      setIsResetPassLoading(false);
    } catch (e) {
      if (e.code === 'auth/user-not-found') {
        setResetPasswordErrorMsg('Email is not valid.');
      } else {
        setResetPasswordErrorMsg('Failed to reset password.');
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (resetPasswordInp.current.value === '') {
      return setResetPasswordErrorMsg('Please provide an email address.');
    }

    handleResetPassword();
  };

  return (
    <SectionTag>
      <PageTitle text="reset your password" />

      <div>
        <Container>
          <form
            className="m-auto mb-[15px] w-3/4 border border-fourthColor
            p-[15px] text-primaryColor"
            onSubmit={handleFormSubmit}
          >
            <p className="mb-4 text-sm">
              Please enter the email address you used to register. You will
              receive a temporary link to reset your password.
            </p>

            {resetPasswordErrorMsg && (
              <p
                className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${
                  resetPasswordErrorMsg && 'bg-red-200 px-4 py-1.5 text-red-800'
                }`}
              >
                {resetPasswordErrorMsg && resetPasswordErrorMsg}
              </p>
            )}

            {resetPasswordSuccessMsg && (
              <p
                className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${
                  resetPasswordSuccessMsg &&
                  'bg-green-200 px-4 py-1.5 text-green-800'
                }`}
              >
                {resetPasswordSuccessMsg && resetPasswordSuccessMsg}
              </p>
            )}

            <div className="grid grid-cols-1 items-center sm:grid-cols-4">
              <label
                className="mb-2 text-sm sm:col-span-1
                  sm:mb-0 sm:me-5 sm:text-right"
                htmlFor="resetEmailInp"
              >
                Email address
              </label>

              <div className="sm:col-span-3">
                <input
                  className="max-h-10 w-full border border-fourthColor
                  px-[15px] py-2.5 text-primaryColor outline-0 sm:w-7/12"
                  id="resetEmailInp"
                  type="email"
                  ref={resetPasswordInp}
                />

                <ShopNowBtn
                  isDisabled={isResetPassLoading}
                  styles={`border-none py-2.5 text-sm
                  bg-primaryColor px-5 md:px-[30px] uppercase
                  text-white outline-0 duration-300 w-full sm:w-fit
                  mt-2.5 sm:mt-0 ${
                    isResetPassLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-thirdColor'
                  }`}
                  type="submit"
                  text={
                    <>
                      <span className="hidden xs:inline">send reset link</span>
                      <span className="xs:hidden">send</span>
                    </>
                  }
                />
              </div>
            </div>
          </form>

          <div className="m-auto w-3/4">
            <NavLink
              className="flex w-fit items-center hover:text-thirdColor"
              to="/signin"
            >
              <span className="me-1">
                <IoIosArrowBack />
              </span>

              <span>Back to login</span>
            </NavLink>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default ForgotPasswordPage;
