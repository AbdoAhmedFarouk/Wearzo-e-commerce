import Logo from '../Logo/Logo';
import sideBarBannerImg from '../../assets/sidebar_banner.jpg';

function SideBarBanner() {
  return (
    <div className="group mt-[30px] hidden overflow-hidden md:block">
      <Logo
        img={sideBarBannerImg}
        styles="w-full duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default SideBarBanner;
