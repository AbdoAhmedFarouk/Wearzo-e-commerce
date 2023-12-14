import { NavLink } from 'react-router-dom';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';

import './cartpage.css';

import cartImg from '../../assets/subbanner-1.jpg';

import { FaTrash } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { PiLockKeyLight, PiMedalLight } from 'react-icons/pi';
import { BsTruck } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';
import Input from '../../components/Input/Input';

function CartPage() {
  return (
    <SectionTag>
      <PageTitle text="cart" />

      <div>
        <Container
          styles="grid grid-cols-1 sm:grid-cols-12 text-primaryColor
          sm:gap-x-[30px] gap-[30px]"
        >
          <div className="sm:col-span-8">
            <div className="border border-fourthColor">
              <div
                className="relative p-4 text-xl font-medium capitalize
                leading-none before:absolute before:bottom-0 before:left-0
                before:h-px before:w-full before:border-b before:border-fourthColor"
              >
                <h1>shopping cart</h1>
              </div>

              <div>
                <ul>
                  <li className="border-b border-fourthColor py-4">
                    <div
                      className="grid grid-cols-1 items-center text-center
                      sm:grid-cols-12 sm:text-start"
                    >
                      <div className="m-auto mb-5 sm:col-span-3 sm:mb-0">
                        <img
                          className="h-[100px] w-[75px]"
                          src={cartImg}
                          alt={cartImg}
                        />
                      </div>

                      <div className="sm:col-span-4">
                        <div className="text-sm font-medium capitalize">
                          <a href="#">creper line dress</a>
                        </div>

                        <div
                          className="mt-2 flex items-center justify-center
                          sm:mt-[5px] sm:justify-start"
                        >
                          <span
                            className="text-sm text-secondaryColor
                            line-through"
                          >
                            $41.90
                          </span>

                          <span
                            className="mx-[5px] bg-primaryColor px-2 py-[3px]
                            text-xs leading-normal text-white"
                          >
                            -10%
                          </span>
                        </div>

                        <span
                          className="mb-5 mt-2 inline-block text-lg
                          font-medium leading-[26px] text-primaryColor
                          sm:m-0"
                        >
                          $37.71
                        </span>
                      </div>

                      <div
                        className="flex flex-wrap items-center
                        justify-around sm:col-span-5"
                      >
                        <div className="relative">
                          <Input
                            styles="h-10 w-12 border border-fourthColor
                            px-2 py-[2.8px] outline-0"
                            type="number"
                            placeholder="1"
                          />

                          <span
                            className="absolute -right-5 top-0 flex
                            h-5 w-5 cursor-pointer items-center justify-center
                            border border-l-0 border-fourthColor"
                          >
                            <FiPlus />
                          </span>

                          <span
                            className="absolute -right-5 bottom-0 flex
                            h-5 w-5 cursor-pointer items-center justify-center
                            border border-l-0 border-fourthColor"
                          >
                            <FiMinus />
                          </span>
                        </div>

                        <span className="text-lg font-medium">$37.71</span>

                        <span
                          className="h-4 w-4 cursor-pointer
                          hover:text-thirdColor"
                        >
                          <FaTrash />
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <NavLink
              to="/"
              className="mt-3 flex cursor-pointer
              items-center text-sm font-medium sm:text-base"
            >
              <IoIosArrowBack />

              <span className="ms-0.5">Continue shopping</span>
            </NavLink>
          </div>

          <div className="sm:col-span-4">
            <div className="border border-fourthColor">
              <div
                className="flex items-center justify-between border-b
              border-fourthColor p-[15px] text-sm font-medium
              text-primaryColor"
              >
                <span>5 items</span>

                <span>$149.46</span>
              </div>

              <div
                className="flex items-center justify-between border-b
              border-fourthColor p-[15px] text-sm font-medium
              text-primaryColor"
              >
                <span>Total (tax incl.)</span>

                <span className="text-lg leading-5">$149.46</span>
              </div>

              <div className="p-[15px] text-center">
                <ShopNowBtn
                  text="proceed to checkout"
                  styles="py-2.5 px-[30px] bg-primaryColor
                  hover:bg-thirdColor text-white uppercase
                  text-sm duration-300 outline-0 border-0"
                />
              </div>
            </div>

            <div className="mt-[25px]">
              <div
                className="mb-4 text-center sm:mb-4 sm:flex
                sm:items-center sm:text-start"
              >
                <div
                  className="m-auto mb-2 w-fit text-[35px]
                  text-thirdColor sm:m-0 sm:me-[5px]"
                >
                  <PiLockKeyLight />
                </div>

                <div className="text-sm">
                  <h6>Security policy</h6>
                  <p>(edit with the Customer Reassurance module)</p>
                </div>
              </div>

              <div
                className="mb-4 text-center sm:mb-4 sm:flex
                sm:items-center sm:text-start"
              >
                <div
                  className="m-auto mb-2 w-fit text-[30px]
                  text-thirdColor sm:m-0 sm:mx-[5px]"
                >
                  <BsTruck />
                </div>

                <div className="text-sm">
                  <h6>Security policy</h6>
                  <p>(edit with the Customer Reassurance module)</p>
                </div>
              </div>

              <div
                className="mb-4 text-center sm:mb-4 sm:flex
                sm:items-center sm:text-start"
              >
                <div
                  className="m-auto mb-2 w-fit text-[35px]
                  text-thirdColor sm:m-0 sm:me-[5px]"
                >
                  <PiMedalLight />
                </div>

                <div className="text-sm">
                  <h6>Security policy</h6>
                  <p>(edit with the Customer Reassurance module)</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default CartPage;
