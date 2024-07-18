import { useRecoilState } from 'recoil';
import { isMobileContactFooterMenuOpened } from '../../atoms/isOpened';
import { useIsOpen } from '../../hooks/useIsOpen';

import FooterDropDownMenus from '../../ui/FooterDropDownMenus/FooterDropDownMenus';
import MainButton from '../../components/MainButton/MainButton';
import Logo from '../../components/Logo/Logo';
import MobileMenuHeader from '../MobileMenuHeader/MobileMenuHeader';
import Input from '../Input/Input';

import logoImg from '../../assets/logo1.png';

import { TfiEmail } from 'react-icons/tfi';

function ContactInfo() {
  const [isMobileContactFooterMenuOpen, setIsMobileContactFooterMenuOpen] =
    useRecoilState(isMobileContactFooterMenuOpened);

  const handleOpenMobileFooterContactMenu = useIsOpen(
    isMobileContactFooterMenuOpen,
    setIsMobileContactFooterMenuOpen,
  );

  return (
    <>
      <MobileMenuHeader
        styles="mb-2.5 flex items-center
        justify-between text-sm font-medium uppercase md:hidden"
        spanStyles="text-lg duration-500"
        isOpen={isMobileContactFooterMenuOpen}
        onClick={handleOpenMobileFooterContactMenu}
      >
        <h6>Contact info</h6>
      </MobileMenuHeader>

      <div
        className={`relative mb-0 hidden
        pr-[15px] text-center before:absolute before:right-0
        before:top-0 before:h-full before:w-[1px]
        before:bg-white before:opacity-20 md:block
        `}
      >
        <div
          className="mb-[30px] flex items-center
            justify-center 2xl:mb-11"
        >
          <Logo img={logoImg} />
        </div>

        <ul className="mb-[43px] text-base">
          <li className="mb-2">
            71 Pennington Lane Vernon Rockville, CT 06066.
          </li>
          <li className="mb-2">0109-401-3777</li>
          <li className="mb-2 cursor-pointer hover:text-thirdColor">
            supersanko2002@gmail.com
          </li>
        </ul>

        <form className="relative" action="#">
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2
            text-xl leading-none text-secondaryColor"
          >
            <TfiEmail />
          </span>

          <Input
            name="email"
            id="my-email"
            type="email"
            styles="h-11 border-none ps-11 text-primaryColor
            placeholder:text-secondaryColor lg:h-12 lg:py-2.5"
            placeholder="Your email address"
          />

          <span className="absolute right-1 top-1/2 -translate-y-1/2">
            <MainButton text="subscribe" />
          </span>
        </form>
      </div>

      <FooterDropDownMenus
        isOpen={isMobileContactFooterMenuOpen}
        styles="my-2.5 xxxs:h-[186.29px] h-[204.69px]"
      >
        <div className="mb-[15px] flex items-center">
          <Logo img={logoImg} />
        </div>

        <ul className="mb-[15px] text-base">
          <li className="mb-2">
            71 Pennington Lane Vernon Rockville, CT 06066.
          </li>
          <li className="mb-2">0109-401-3777</li>
          <li className="mb-2 cursor-pointer hover:text-thirdColor">
            supersanko2002@gmail.com
          </li>
        </ul>

        <form className="relative" action="#">
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2
            text-xl leading-none text-secondaryColor"
          >
            <TfiEmail />
          </span>

          <Input
            name="email"
            id="my-email1"
            type="email"
            styles="h-11 border-none ps-11 text-primaryColor
            placeholder:text-secondaryColor lg:h-12 lg:py-2.5"
            placeholder="Your email address"
          />

          <span className="absolute right-1 top-1/2 -translate-y-1/2">
            <MainButton text="subscribe" />
          </span>
        </form>
      </FooterDropDownMenus>
    </>
  );
}

export default ContactInfo;
