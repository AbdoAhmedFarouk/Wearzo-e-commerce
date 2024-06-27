import { Link } from 'react-router-dom';

function NavbarLinks() {
  return (
    <div className="hidden flex-1 ps-4 md:flex">
      <ul
        className="flex items-center gap-5 text-sm font-medium
        uppercase md:ms-4 lg:ms-6 2xl:ms-10 2xl:gap-8"
      >
        <li>
          <Link
            className="inline-block cursor-pointer leading-[90px] hover:text-thirdColor
            2xl:leading-[110px]"
            to="/"
          >
            Home
          </Link>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <Link
            className="inline-block cursor-pointer leading-[90px] hover:text-thirdColor
            2xl:leading-[110px]"
            to="specials"
          >
            specials
          </Link>
        </li>

        <li
          className="group relative cursor-pointer leading-[90px]
          hover:text-thirdColor 2xl:leading-[110px]"
        >
          <Link
            className="inline-block cursor-pointer leading-[90px] hover:text-thirdColor
            2xl:leading-[110px]"
            to="stores"
          >
            stores
          </Link>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <Link
            className="inline-block cursor-pointer leading-[90px] hover:text-thirdColor
            2xl:leading-[110px]"
            to="aboutUs"
          >
            about us
          </Link>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <Link
            className="inline-block cursor-pointer leading-[90px] hover:text-thirdColor
            2xl:leading-[110px]"
            to="delivery"
          >
            Delivery
          </Link>
        </li>

        <li
          className="cursor-pointer leading-[90px] hover:text-thirdColor
          2xl:leading-[110px]"
        >
          <Link
            className="inline-block cursor-pointer leading-[90px] hover:text-thirdColor
            2xl:leading-[110px]"
            to="blogs"
          >
            blogs
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarLinks;
