import MobileMenu from '../../ui/MobileMenu/MobileMenu';
import Navbar from '../../components/Navbar/Navbar';
import TopNavbar from '../../components/TopNavbar/TopNavbar';

function Header() {
  return (
    <header className="relative">
      <TopNavbar />

      <Navbar />

      <MobileMenu />
    </header>
  );
}

export default Header;
