import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isChangePasswordBtnLoading } from '../../atoms/isChangePasswordBtnLoading';
import { changePasswordErrorMsg } from '../../atoms/changePasswordErrorMsg';
import { changePasswordSuccessMsg } from '../../atoms/changePasswordSuccessMsg';

import useUserCart from '../../hooks/useUserCart';

import { auth, updateUserPassword } from '../../firebase';

import SectionTag from '../../components/SectionTag/SectionTag';
import PageTitle from '../../components/PageTitle/PageTitle';
import Container from '../../components/Container/Container';
import LabelAndInput from '../../components/LabelAndInput/LabelAndInput';
import MainButton from '../../components/MainButton/MainButton';

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-1.5 max-h-10 text-primaryColor h-10`;

function ChangePasswordPage() {
  const [isBtnLoading, setIsBtnLoading] = useRecoilState(
    isChangePasswordBtnLoading,
  );
  const [errorMsg, setErrorMsg] = useRecoilState(changePasswordErrorMsg);
  const [successMsg, setSuccessMsg] = useRecoilState(changePasswordSuccessMsg);

  const { setLoggedUsers, checkLoggedUser } = useUserCart();

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const newPasswordRef = useRef();
  const newPasswordConfirmationRef = useRef();

  const parentPathName = pathname.substring(1, pathname.lastIndexOf('/'));

  const handleChangePassword = () => {
    setErrorMsg('');
    setSuccessMsg('');
    setIsBtnLoading(true);

    updateUserPassword(
      auth.currentUser,
      newPasswordConfirmationRef?.current?.value,
    )
      .then(() => {
        setIsBtnLoading(false);
        setSuccessMsg('Password updated successfully');
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg('Failed to change password');
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      newPasswordRef.current.value !== newPasswordConfirmationRef.current.value
    ) {
      setErrorMsg('Passwords do not match');
    } else if (
      newPasswordRef.current.value === '' &&
      newPasswordConfirmationRef.current.value === ''
    ) {
      setErrorMsg('Please enter a new password');
    } else {
      setLoggedUsers((users) =>
        users.map((user) =>
          user.email === checkLoggedUser?.email
            ? {
                ...user,
                password:
                  newPasswordConfirmationRef?.current?.value !== ''
                    ? newPasswordConfirmationRef?.current?.value
                    : checkLoggedUser?.password,
              }
            : user,
        ),
      );

      handleChangePassword();

      newPasswordRef.current.value = '';
      newPasswordConfirmationRef.current.value = '';
    }
  };

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <SectionTag>
      <PageTitle
        header="change Password"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childRouteText="change Password"
      />

      <div>
        <Container styles="text-primaryColor">
          <div className="w-full px-[15px] md:m-auto md:w-3/4">
            <h3
              className="mb-5 border-b border-fourthColor py-[7px] text-lg
              capitalize leading-5 text-sixColor"
            >
              your password
            </h3>

            {errorMsg ? (
              <p
                className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${errorMsg && 'bg-red-200 px-4 py-1.5 text-red-800'}`}
              >
                {errorMsg && errorMsg}
              </p>
            ) : (
              successMsg && (
                <p
                  className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${
                  successMsg && 'bg-green-200 px-4 py-1.5 text-green-800'
                }`}
                >
                  {successMsg && successMsg}
                </p>
              )
            )}

            <form onSubmit={handleFormSubmit}>
              <LabelAndInput
                divStyles="sm:grid-cols-12 mb-5"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9`}
                htmlFor="oldPassword"
                id="oldPassword"
                labelText="Password"
                name="Password"
                placeholder="password"
                type="password"
                refEl={newPasswordRef}
                minLength={8}
              />

              <LabelAndInput
                divStyles="sm:grid-cols-12"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9`}
                htmlFor="newPassword"
                id="newPassword"
                labelText="confirm Password"
                name="new-password"
                placeholder="confirm Password"
                refEl={newPasswordConfirmationRef}
                type="password"
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
                  text={!isBtnLoading ? 'continue' : 'Loading...'}
                  type="submit"
                  styles={`bg-primaryColor text-white md:py-2.5 md:px-[30px] duration-300
                  py-[7px] px-5 text-sm border-0 outline-0 uppercase
                  ${
                    isBtnLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-thirdColor'
                  }`}
                  isDisabled={isBtnLoading}
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default ChangePasswordPage;
