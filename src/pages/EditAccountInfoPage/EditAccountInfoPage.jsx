import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { editUserInfoErrorMsg } from '../../atoms/editUserInfoErrorMsg';
import { editUserInfoSuccessMsg } from '../../atoms/editUserInfoSuccessMsg';
import { isEditUserInfoBtnLoading } from '../../atoms/isEditUserInfoBtnLoading';

import useUserCart from '../../hooks/useUserCart';

import { auth, updateUserEmail } from '../../firebase';

import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import LabelAndInput from '../../components/LabelAndInput/LabelAndInput';
import MainButton from '../../components/MainButton/MainButton';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';

const inputDefaultStyles = `border-fourthColor bg-white border
px-[15px] py-1.5 max-h-10 text-primaryColor h-10`;

function EditAccountInfoPage() {
  const [editInfoErrorMsg, setEditInfoErrorMsg] =
    useRecoilState(editUserInfoErrorMsg);
  const [editInfoSuccessMsg, setEditInfoSuccessMsg] = useRecoilState(
    editUserInfoSuccessMsg,
  );
  const [isEditInfoBtnLoading, setIsEditInfoBtnLoading] = useRecoilState(
    isEditUserInfoBtnLoading,
  );

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { setLoggedUsers, checkLoggedUser } = useUserCart();

  const newFirstNameRef = useRef();
  const newLastNameRef = useRef();
  const newEmailRef = useRef();
  const newTelephoneRef = useRef();

  const parentPathName = pathname.substring(1, pathname.lastIndexOf('/'));

  const handleChangeEmailAddress = async () => {
    try {
      setEditInfoErrorMsg('');
      setEditInfoSuccessMsg('');
      setIsEditInfoBtnLoading(true);

      await updateUserEmail(auth.currentUser, newEmailRef?.current?.value);

      setIsEditInfoBtnLoading(false);
      setEditInfoSuccessMsg('Your Information has been updated successfully.');
    } catch {
      setEditInfoErrorMsg('Failed to change the email address.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      newFirstNameRef.current.value === '' ||
      newLastNameRef.current.value === '' ||
      newEmailRef.current.value === '' ||
      newTelephoneRef.current.value === ''
    ) {
      setEditInfoErrorMsg('Please enter your data.');
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,4}$/.test(
        newEmailRef.current.value,
      )
    ) {
      setEditInfoErrorMsg('Please enter a valid email address.');
    } else if (
      checkLoggedUser?.firstName === newFirstNameRef.current.value ||
      checkLoggedUser?.lastName === newLastNameRef.current.value ||
      checkLoggedUser?.mobile === newTelephoneRef.current.value ||
      checkLoggedUser?.email === newEmailRef.current.value
    ) {
      setEditInfoErrorMsg('Please enter a new data.');
    } else {
      setLoggedUsers((users) =>
        users.map((user) =>
          user.email === checkLoggedUser?.email
            ? {
                ...user,

                firstName:
                  newFirstNameRef?.current?.value === ''
                    ? checkLoggedUser?.firstName
                    : newFirstNameRef?.current?.value,

                lastName:
                  newLastNameRef?.current?.value === ''
                    ? checkLoggedUser?.lastName
                    : newLastNameRef?.current?.value,

                email:
                  newEmailRef?.current?.value === ''
                    ? checkLoggedUser?.email
                    : newEmailRef?.current?.value,

                mobile:
                  newTelephoneRef?.current?.value === ''
                    ? checkLoggedUser?.mobile
                    : newTelephoneRef?.current?.value,
              }
            : user,
        ),
      );

      handleChangeEmailAddress();

      newFirstNameRef.current.value = '';
      newLastNameRef.current.value = '';
      newEmailRef.current.value = '';
      newTelephoneRef.current.value = '';
    }
  };

  const handleNavigationSteps = () => {
    navigate(-1);
  };

  return (
    <SectionTag>
      <PageTitle
        header="my account information"
        text={parentPathName}
        urlRouteLink={`/${parentPathName.toLowerCase()}`}
        childRouteText="edit information"
      />

      <div>
        <Container styles="text-primaryColor">
          <div className="w-full px-[15px] md:m-auto md:w-3/4">
            <h3
              className="mb-5 border-b border-fourthColor py-[7px] text-lg
              capitalize leading-5 text-sixColor"
            >
              your personal details
            </h3>

            {editInfoErrorMsg ? (
              <p
                className={`m-auto mb-4 w-fit rounded-[4px]
                border-0 ${
                  editInfoErrorMsg && 'bg-red-200 px-4 py-1.5 text-red-800'
                }`}
              >
                {editInfoErrorMsg && editInfoErrorMsg}
              </p>
            ) : (
              editInfoSuccessMsg && (
                <p
                  className={`m-auto mb-4 w-fit rounded-[4px]
                  border-0 ${
                    editInfoSuccessMsg &&
                    'bg-green-200 px-4 py-1.5 text-green-800'
                  }`}
                >
                  {editInfoSuccessMsg && editInfoSuccessMsg}
                </p>
              )
            )}

            <form onSubmit={handleFormSubmit}>
              <LabelAndInput
                divStyles="sm:grid-cols-12 mb-5"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9`}
                htmlFor="first-name"
                id="first-name"
                labelText="first name"
                name="firstName"
                placeholder="first name"
                required
                type="text"
                refEl={newFirstNameRef}
              />

              <LabelAndInput
                divStyles="sm:grid-cols-12 mb-5"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9`}
                htmlFor="last-name"
                id="last-name"
                labelText="Last name"
                name="LastName"
                placeholder="Last name"
                type="text"
                refEl={newLastNameRef}
                required
              />

              <LabelAndInput
                divStyles="sm:grid-cols-12 mb-5"
                lableStyles="col-span-3 mb-2 text-sm sm:mb-0 sm:text-center"
                inputStyles={`${inputDefaultStyles} col-span-9`}
                htmlFor="email"
                id="email"
                labelText="Email"
                name="Email"
                placeholder="Email"
                type="email"
                refEl={newEmailRef}
                required
              />

              <div className="grid grid-cols-1 items-center text-sm sm:grid-cols-12">
                <label
                  className="col-span-3 mb-2 sm:mb-0 sm:text-center"
                  htmlFor="telephone"
                >
                  Telephone
                </label>

                <div className="col-span-9">
                  <div className="mb-1">
                    <Input
                      styles={inputDefaultStyles}
                      id="telephone"
                      type="tel"
                      name="Telephone"
                      pattern="\d{3}-\d{4}-\d{4}"
                      placeholder="Telephone"
                      required
                      refEl={newTelephoneRef}
                      minLength="8"
                    />
                  </div>

                  <span>Mobile must be in this format 000 - 0000 - 0000</span>
                </div>
              </div>

              <div
                className="mt-5 flex flex-col-reverse gap-5 xxs:flex-row
                xxs:items-center xxs:justify-between xxs:gap-0"
              >
                <MainButton
                  text="back"
                  styles="bg-primaryColor text-white md:py-2.5 md:px-[30px] duration-300
                  py-[7px] px-5 text-sm border-0 outline-0 uppercase hover:bg-thirdColor"
                  onClickHandler={handleNavigationSteps}
                />

                <MainButton
                  text={!isEditInfoBtnLoading ? 'continue' : 'Loading...'}
                  type="submit"
                  styles={`bg-primaryColor text-white md:py-2.5 md:px-[30px] duration-300
                  py-[7px] px-5 text-sm border-0 outline-0 uppercase
                  ${
                    isEditInfoBtnLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-thirdColor'
                  }
                  `}
                  isDisabled={isEditInfoBtnLoading}
                />
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default EditAccountInfoPage;
