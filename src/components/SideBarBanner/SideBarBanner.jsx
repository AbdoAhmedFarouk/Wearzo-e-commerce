import sideBarBannerImg from '../../assets/sidebar_banner.jpg';

function SideBarBanner() {
  return (
    <div className="group mt-[30px] hidden overflow-hidden md:block">
      <a href="#">
        <img
          className="w-full duration-300 group-hover:scale-105"
          src={sideBarBannerImg}
          alt={sideBarBannerImg}
        />
      </a>
    </div>
  );
}

export default SideBarBanner;
