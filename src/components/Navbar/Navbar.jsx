import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  isCurrencyMenuOpen,
  isLanguageMenuOpen,
  isLoginMenuOpen,
  isCartMenuOpen,
} from '../../atoms/isOpen';

import Logo from '../Logo/Logo';
import navLogo from '../../assets/logo.jpg';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import NavbarIcons from '../NavbarIcons/NavbarIcons';

function Navbar() {
  const [isOpen, setIsOpen] = useRecoilState(isLoginMenuOpen);
  const [isOpen1, setIsOpen1] = useRecoilState(isCartMenuOpen);

  const setter = useResetRecoilState(isCurrencyMenuOpen);
  const setter1 = useResetRecoilState(isLanguageMenuOpen);

  const handleOpenLoginMenu = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false);
    setter();
    setter1();
  };

  const handleOpenCartMenu = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false);
    setter();
    setter1();
  };

  return (
    <nav className="relative text-primaryColor shadow-[0_1px_3px_rgba(0,0,0,0.11)]">
      <div className="my-container flex items-center justify-between">
        <div>
          <Logo img={navLogo} />
        </div>

        <NavbarLinks />

        <NavbarIcons
          setIsOpen={setIsOpen}
          handleOpenCartMenu={handleOpenCartMenu}
          handleOpenLoginMenu={handleOpenLoginMenu}
        />
      </div>
    </nav>
  );
}

export default Navbar;
