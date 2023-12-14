import { NavLink } from 'react-router-dom';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import Input from '../../components/Input/Input';

import { IoIosArrowBack } from 'react-icons/io';

function ForgotPasswordPage() {
  return (
    <SectionTag>
      <PageTitle text="reset your password" />

      <div>
        <Container>
          <form
            className="m-auto mb-[15px] w-3/4 border border-fourthColor
            p-[15px] text-primaryColor"
          >
            <p className="mb-4 text-sm">
              Please enter the email address you used to register. You will
              receive a temporary link to reset your password.
            </p>

            <div className="grid grid-cols-1 items-center sm:grid-cols-4">
              <label
                className="mb-2 text-sm sm:col-span-1
                  sm:mb-0 sm:me-5 sm:text-right"
                htmlFor="resetEmailInp"
              >
                Email address
              </label>

              <div className="sm:col-span-3">
                <Input
                  styles="max-h-10 w-full border border-fourthColor
                  px-[15px] py-2.5 text-primaryColor outline-0 sm:w-7/12"
                  id="resetEmailInp"
                  type="email"
                />

                <ShopNowBtn
                  styles="border-none py-2.5 text-sm
                    bg-primaryColor px-5 md:px-[30px] uppercase
                    text-white outline-0 hover:bg-thirdColor
                    duration-300 w-full sm:w-fit mt-2.5 sm:mt-0"
                  type="button"
                  text={
                    <>
                      <span className="hidden xs:block">send reset link</span>
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
