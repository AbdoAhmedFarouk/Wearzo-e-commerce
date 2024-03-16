import { useRecoilState } from 'recoil';
import { isAsideMenuOpen } from '../../atoms/aside';
import { useIsOpen } from '../../hooks/useIsOpen';

import HoveringMenu from '../../ui/HoveringMenu/HoveringMenu';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { TfiYoutube } from 'react-icons/tfi';

function Aside() {
  const [isOpen, setIsOpen] = useRecoilState(isAsideMenuOpen);

  const showLisFn = useIsOpen(isOpen, setIsOpen);

  return (
    <div
      className="hidden border-t border-fourthColor px-[20px] py-[10px]
      text-sm text-sixColor md:block lg:py-[20px]"
      // md:w-[165.79px]
      // lg:w-[207.3px] xl:w-[232.1px] 2xl:w-[251.86px]
    >
      <div>
        <h3
          className="mb-[10px] text-xs font-medium uppercase leading-5
        text-primaryColor lg:text-sm"
        >
          SHOP BY CATEGORIES
        </h3>

        <ul className="capitalize">
          <li className="group relative">
            <a
              className="flex items-center justify-between py-[3px]
              leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              Shop{' '}
              <span className="-rotate-90 text-base font-normal">
                <MdKeyboardArrowDown />
              </span>
            </a>

            <HoveringMenu
              top="top-0"
              shadow="shadow-[0_0_5px_rgba(0,0,0,0.1)]"
              left="left-full"
              zIndex="z-[51]"
              display="flex"
              itemsCenter="items-center"
              translate="translate-y-5 group-hover:translate-y-0"
              padding="p-5"
            >
              <div
                className="w-[187px] px-[15px] lg:w-[240px]
              xl:w-[280px] 2xl:w-[320px]"
              >
                <ul>
                  <li className="text-sixColor hover:text-thirdColor">
                    <a
                      className="block border-b border-fourthColor
                      pb-[10px] leading-none"
                      href="#"
                    >
                      western
                    </a>
                  </li>
                </ul>

                <ul className="mt-[10px] font-normal text-secondaryColor">
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      skirts
                    </a>
                  </li>
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      jumpsuits
                    </a>
                  </li>
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      shorts
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="w-[187px] px-[15px] lg:w-[240px] xl:w-[280px]
              2xl:w-[320px]"
              >
                <ul>
                  <li className="text-sixColor hover:text-thirdColor">
                    <a
                      className="block border-b border-fourthColor
                      pb-[10px] leading-none"
                      href="#"
                    >
                      Traditional
                    </a>
                  </li>
                </ul>

                <ul className="mt-[10px] font-normal text-secondaryColor">
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      kurtis
                    </a>
                  </li>
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      suits
                    </a>
                  </li>
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      choli
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-[187px] px-[15px] lg:w-[240px] xl:w-[280px] 2xl:w-[320px]">
                <ul>
                  <li className="text-sixColor hover:text-thirdColor">
                    <a
                      className="block border-b border-fourthColor pb-[10px] leading-none"
                      href="#"
                    >
                      Party wear
                    </a>
                  </li>
                </ul>

                <ul className="mt-[10px] font-normal text-secondaryColor">
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      maxi dress
                    </a>
                  </li>
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      crepe shirts
                    </a>
                  </li>
                  <li className="hover:text-thirdColor">
                    <a className="block py-[5px]" href="#">
                      white dress
                    </a>
                  </li>
                </ul>
              </div>
            </HoveringMenu>
          </li>

          <li className="group relative">
            <a
              className="flex items-center justify-between py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              collection{' '}
              <span className="-rotate-90 text-base font-normal">
                <MdKeyboardArrowDown />
              </span>
            </a>

            <HoveringMenu
              top="top-0"
              left="left-full"
              zIndex="z-[51]"
              width="w-[240px]"
              padding="py-2"
              translate="translate-y-5 group-hover:translate-y-0"
              shadow="shadow-[0_0_5px_rgba(0,0,0,0.1)]"
              font="text-secondaryColor"
            >
              <ul>
                <li className="hover:text-thirdColor">
                  <a className="block px-[15px] py-[5px]" href="#">
                    Printed kurta
                  </a>
                </li>
                <li className="hover:text-thirdColor">
                  <a className="block px-[15px] py-[5px]" href="#">
                    floral kurta
                  </a>
                </li>
                <li className="hover:text-thirdColor">
                  <a className="block px-[15px] py-[5px]" href="#">
                    checkered trousers
                  </a>
                </li>
                <li className="hover:text-thirdColor">
                  <a className="block px-[15px] py-[5px]" href="#">
                    loose trousers
                  </a>
                </li>
                <li className="hover:text-thirdColor">
                  <a className="block px-[15px] py-[5px]" href="#">
                    sports tights
                  </a>
                </li>
              </ul>
            </HoveringMenu>
          </li>

          <li>
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              fashion
            </a>
          </li>

          <li>
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              trousers
            </a>
          </li>

          <li>
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              tops
            </a>
          </li>

          <li>
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              tights
            </a>
          </li>

          <li>
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              dresses
            </a>
          </li>

          <li>
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              Pants
            </a>
          </li>

          <li
            className={`${
              !isOpen
                ? 'invisible h-0 overflow-hidden opacity-0 duration-500'
                : 'visible h-[30px] overflow-hidden opacity-100 duration-500 lg:h-[46px]'
            }`}
          >
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              winter outfits
            </a>
          </li>

          <li
            className={`${
              !isOpen
                ? 'invisible h-0 overflow-hidden opacity-0 duration-500'
                : 'visible h-[30px] overflow-hidden opacity-100 duration-500 lg:h-[46px]'
            }`}
          >
            <a
              className="flex py-[3px] leading-6 hover:text-thirdColor lg:py-[11px]"
              href="#"
            >
              casual
            </a>
          </li>

          <li onClick={showLisFn}>
            <span
              className="flex cursor-pointer items-center justify-between py-[3px] leading-6
            hover:text-thirdColor lg:py-[11px]"
            >
              {isOpen ? 'Less' : 'More'} categories{' '}
              <span
                className={`${isOpen && '-rotate-90'} text-base font-normal`}
              >
                <MdKeyboardArrowDown />
              </span>
            </span>
          </li>
        </ul>

        <ul
          className="mt-[15px] flex items-center justify-between text-center text-base leading-[22px] lg:mt-[30px]
        lg:text-lg 2xl:text-xl"
        >
          <li>
            <a className="text-[#3b5998]" href="#">
              <BiLogoFacebook />
            </a>
          </li>
          <li>
            <a className="text-[#00acee]" href="#">
              <BiLogoTwitter />
            </a>
          </li>
          <li>
            <a className="text-[#c4302b]" href="#">
              <TfiYoutube />
            </a>
          </li>
          <li>
            <a className="text-[#cd486b]" href="#">
              <BiLogoInstagram />
            </a>
          </li>
          <li>
            <a className="text-[#0e76a8]" href="#">
              <BiLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
