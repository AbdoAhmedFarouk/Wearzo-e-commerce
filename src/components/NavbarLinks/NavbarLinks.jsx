import { NavLink } from 'react-router-dom';
import HoveringMenu from '../../ui/HoveringMenu/HoveringMenu';

function NavbarLinks() {
  return (
    <div className="hidden flex-1 ps-4 md:flex">
      <ul
        className="flex items-center gap-5 text-sm font-medium
        uppercase md:ms-4 lg:ms-6 2xl:ms-4 2xl:gap-8"
      >
        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <NavLink to="/">Home</NavLink>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <NavLink to="specials">specials</NavLink>
        </li>

        <li
          className="group relative cursor-pointer leading-[90px]
          hover:text-thirdColor 2xl:leading-[110px]"
        >
          <NavLink to="brands">all brands</NavLink>

          <HoveringMenu
            top="top-36"
            zIndex="z-[1000]"
            width="w-[230px]"
            border="border-t-2 border-thirdColor"
            shadow="shadow-[0_1px_5px_rgba(0,0,0,0.11)]"
            onHover="group-hover:top-[88px]  group-hover:2xl:top-[108px]"
            transition="transition-all"
            padding="px-5 py-4"
            font="text-sm normal-case"
            cursor="cursor-default"
          >
            <ul className="flex flex-col gap-y-3 text-secondaryColor">
              {Array.from([1, 2, 3, 4, 5, 6, 7, 8], (_, index) => (
                <li
                  key={index}
                  className="hover:cursor-pointer hover:text-primaryColor"
                >
                  <NavLink to={`brands/brand${index + 1}`}>
                    Brand {index + 1}
                  </NavLink>
                </li>
              ))}
            </ul>
          </HoveringMenu>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <NavLink to="aboutUs">about us</NavLink>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <NavLink to="delivery">Delivery</NavLink>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <NavLink to="blog">blog</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavbarLinks;
