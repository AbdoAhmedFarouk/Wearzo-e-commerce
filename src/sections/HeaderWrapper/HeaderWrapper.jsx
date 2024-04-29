import MobileMenu from '../../ui/MobileMenu/MobileMenu';
import Navbar from '../../components/Navbar/Navbar';
import TopNavbar from '../../components/TopNavbar/TopNavbar';

function HeaderWrapper() {
  return (
    <header className="relative">
      <TopNavbar />

      <Navbar />

      <MobileMenu />
    </header>
  );
}

export default HeaderWrapper;
