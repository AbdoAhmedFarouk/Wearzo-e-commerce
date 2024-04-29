import Logo from '../Logo/Logo';
import NavbarLinks from '../NavbarLinks/NavbarLinks';
import NavbarIcons from '../NavbarIcons/NavbarIcons';

import navLogo from '../../assets/logo.jpg';

function Navbar() {
  return (
    <nav className="relative text-primaryColor shadow-[0_1px_3px_rgba(0,0,0,0.11)]">
      <div className="my-container flex items-center justify-between">
        <div>
          <Logo img={navLogo} />
        </div>

        <NavbarLinks />

        <NavbarIcons />
      </div>
    </nav>
  );
}

export default Navbar;
