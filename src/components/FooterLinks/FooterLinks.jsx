import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  isMobileInfoLinksFooterMenuOpened,
  isMobileAccLinksFooterMenuOpened,
} from '../../atoms/isOpened';
import { useIsOpen } from '../../hooks/useIsOpen';

import FooterDropDownMenus from '../../ui/FooterDropDownMenus/FooterDropDownMenus';
import MobileMenuHeader from '../MobileMenuHeader/MobileMenuHeader';

function FooterLinks() {
  const [isMobileInfoLinksFooterMenuOpen, setIsMobileInfoLinksFooterMenuOpen] =
    useRecoilState(isMobileInfoLinksFooterMenuOpened);
  const [isMobileAccLinksFooterMenuOpen, setIsMobileAccLinksFooterMenuOpen] =
    useRecoilState(isMobileAccLinksFooterMenuOpened);

  const handleOpenMobileFooterInfoLinksMenu = useIsOpen(
    isMobileInfoLinksFooterMenuOpen,
    setIsMobileInfoLinksFooterMenuOpen,
  );
  const handleOpenMobileFooterAccLinksMenu = useIsOpen(
    isMobileAccLinksFooterMenuOpen,
    setIsMobileAccLinksFooterMenuOpen,
  );

  return (
    <div
      className="grid grid-cols-1 text-left
    md:grid-cols-2 md:gap-[30px] md:ps-16"
    >
      <div>
        <MobileMenuHeader
          styles="flex items-center
          justify-between md:block"
          spanStyles="text-lg duration-500 md:hidden"
          onClick={handleOpenMobileFooterInfoLinksMenu}
          isOpen={isMobileInfoLinksFooterMenuOpen}
        >
          <h6
            className="mb-2.5 text-sm font-medium
            uppercase md:mb-[26px] md:leading-7 lg:text-base"
          >
            information
          </h6>
        </MobileMenuHeader>

        <div className="hidden md:block">
          <ul
            className="mb-[15px] text-sm capitalize leading-8
            md:mb-0 lg:text-base lg:leading-9"
          >
            <li>
              <Link className="hover:text-thirdColor" to="delivery">
                delivery
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="legal-notice">
                legal notice
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="aboutUs">
                about us
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="secure-payment">
                secure payment
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="contactUs">
                contact us
              </Link>
            </li>
          </ul>
        </div>

        <FooterDropDownMenus
          isOpen={isMobileInfoLinksFooterMenuOpen}
          styles="h-[175px]"
        >
          <ul className="mb-[15px] text-base capitalize leading-8">
            <li>
              <Link className="hover:text-thirdColor" to="delivery">
                delivery
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="legal-notice">
                legal notice
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="aboutUs">
                about us
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="secure-payment">
                secure payment
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" href="contactUs">
                contact us
              </Link>
            </li>
          </ul>
        </FooterDropDownMenus>
      </div>

      <div>
        <MobileMenuHeader
          styles="flex items-center justify-between md:block"
          spanStyles="text-lg duration-500 md:hidden"
          isOpen={isMobileAccLinksFooterMenuOpen}
          onClick={handleOpenMobileFooterAccLinksMenu}
        >
          <h6
            className="mb-2.5 text-sm font-medium
            uppercase md:mb-[26px] md:leading-7 lg:text-base"
          >
            my account
          </h6>
        </MobileMenuHeader>

        <div className="hidden md:block">
          <ul
            className="mb-[15px] text-sm capitalize leading-8
            md:mb-0 lg:text-base lg:leading-9"
          >
            <li>
              <Link className="hover:text-thirdColor" to="specials">
                prices drop
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="stores">
                stores
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="signin">
                login
              </Link>
            </li>

            <li>
              <a className="hover:text-thirdColor" href="#">
                my account
              </a>
            </li>
          </ul>
        </div>

        <FooterDropDownMenus
          isOpen={isMobileAccLinksFooterMenuOpen}
          styles="h-40"
        >
          <ul className="text-base capitalize leading-8">
            <li>
              <Link className="hover:text-thirdColor" to="specials">
                prices drop
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="stores">
                stores
              </Link>
            </li>

            <li>
              <Link className="hover:text-thirdColor" to="signin">
                login
              </Link>
            </li>

            <li>
              <a className="hover:text-thirdColor" href="#">
                my account
              </a>
            </li>
          </ul>
        </FooterDropDownMenus>
      </div>
    </div>
  );
}

export default FooterLinks;
