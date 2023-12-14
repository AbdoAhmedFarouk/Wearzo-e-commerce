import { useRecoilState } from 'recoil';
import { NavLink } from 'react-router-dom';
import isNumbers from '../../atoms/showPassword';

import SectionTag from '../../components/SectionTag/SectionTag';
import PageTitle from '../../components/PageTitle/PageTitle';
import Container from '../../components/Container/Container';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import Input from '../../components/Input/Input';

function SigninPage() {
  const [isNums, setIsNums] = useRecoilState(isNumbers);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleShowPassword = () => {
    setIsNums(!isNums);
  };

  return (
    <SectionTag>
      <PageTitle text="signin" />

      <div>
        <Container>
          <div
            className="m-auto w-3/4 border border-fourthColor p-[15px]
            text-center text-primaryColor"
          >
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <div
                className="grid grid-cols-1 items-center
                sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="signEmailInp"
                >
                  Email
                </label>

                <Input
                  styles="col-span-5 m-auto max-h-10 w-full
                  border border-fourthColor px-[15px]
                  py-2.5 text-primaryColor outline-0"
                  id="signEmailInp"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div
                className="my-4 grid grid-cols-1 items-center
                sm:grid-cols-10"
              >
                <label
                  className="col-span-3 mb-2 text-left
                  text-sm font-medium capitalize sm:mb-0"
                  htmlFor="signPasswordInp"
                >
                  Password
                </label>

                <div className="col-span-5 flex items-center">
                  <Input
                    id="signPasswordInp"
                    type={isNums ? 'text' : 'password'}
                    name="password"
                    required
                  />

                  <ShopNowBtn
                    styles="border-none
                    bg-primaryColor px-4 py-2.5 text-sm
                    capitalize text-white outline-0"
                    onClick={handleShowPassword}
                    text="Show"
                  />
                </div>
              </div>

              <div className="mb-[15px] text-sm">
                <NavLink
                  className="hover:text-thirdColor"
                  to="/password-recovery"
                >
                  Forgot your password?
                </NavLink>
              </div>

              <div className="mb-[18px]">
                <ShopNowBtn
                  styles="border-none py-2.5 text-sm
                  bg-primaryColor px-[30px] uppercase
                  text-white outline-0 hover:bg-thirdColor
                  duration-300"
                  text="sign in"
                />
              </div>

              <div
                className="relative pt-[18px] text-base leading-5
                before:absolute before:left-0 before:top-0
                before:h-px before:w-full before:bg-fourthColor"
              >
                <NavLink className="hover:text-thirdColor" to="/signup">
                  No account? Create one here
                </NavLink>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default SigninPage;
