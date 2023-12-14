import { useRecoilState } from 'recoil';
import {
  isInfoLinksFooterMenuOpen,
  isAccLinksFooterMenuOpen,
} from '../../atoms/isOpen';
import { useIsOpen } from '../../hooks/useIsOpen';

import FooterDropDownMenus from '../../ui/FooterDropDownMenus/FooterDropDownMenus';
import MobileMenuHeader from '../MobileMenuHeader/MobileMenuHeader';

function FooterLinks() {
  const [isInfoLinksOpen, setIsInfoLinksOpen] = useRecoilState(
    isInfoLinksFooterMenuOpen,
  );

  const [isAccLinksOpen, setIsAccLinksOpen] = useRecoilState(
    isAccLinksFooterMenuOpen,
  );

  const openInfoLinksMenuFn = useIsOpen(isInfoLinksOpen, setIsInfoLinksOpen);
  const openAccLinksMenuFn = useIsOpen(isAccLinksOpen, setIsAccLinksOpen);

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
          onClick={openInfoLinksMenuFn}
          isOpen={isInfoLinksOpen}
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
              <a className="hover:text-thirdColor" href="#">
                delivery
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                legal notice
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                about us
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                secure payment
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                contact us
              </a>
            </li>
          </ul>
        </div>

        <FooterDropDownMenus isOpen={isInfoLinksOpen} styles="h-[175px]">
          <ul className="mb-[15px] text-base capitalize leading-8">
            <li>
              <a className="hover:text-thirdColor" href="#">
                delivery
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                legal notice
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                about us
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                secure payment
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                contact us
              </a>
            </li>
          </ul>
        </FooterDropDownMenus>
      </div>

      <div>
        <MobileMenuHeader
          styles="flex items-center
          justify-between md:block"
          spanStyles="text-lg duration-500 md:hidden"
          isOpen={isAccLinksOpen}
          onClick={openAccLinksMenuFn}
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
              <a className="hover:text-thirdColor" href="#">
                prices drop
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                sitemap
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                store
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                login
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                my account
              </a>
            </li>
          </ul>
        </div>

        <FooterDropDownMenus isOpen={isAccLinksOpen} styles="h-40">
          <ul className="text-base capitalize leading-8">
            <li>
              <a className="hover:text-thirdColor" href="#">
                prices drop
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                sitemanp
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                stores
              </a>
            </li>
            <li>
              <a className="hover:text-thirdColor" href="#">
                login
              </a>
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
