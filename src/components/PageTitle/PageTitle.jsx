import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import Container from '../Container/Container';

PageTitle.propTypes = {
  text: PropTypes.string,
  childRouteText: PropTypes.any,
  grandChildRouteText: PropTypes.any,
  urlRouteLink: PropTypes.string,
  childUrlRouteLink: PropTypes.string,
  header: PropTypes.string,
};

function PageTitle({
  header,
  text,
  childRouteText,
  grandChildRouteText,
  urlRouteLink,
  childUrlRouteLink,
}) {
  const slicedTitle = text?.slice(0, 25);

  return (
    <div
      className="mb-[30px] bg-fifthColor py-[14.5px]
      text-primaryColor"
    >
      <Container
        styles="text-center md:flex md:items-center
        md:justify-between"
      >
        <h2
          className="mb-2 text-sm font-medium uppercase
          leading-5 md:mb-0 md:text-base md:leading-5"
        >
          {header ? header : slicedTitle}
        </h2>

        <ul
          className="flex items-center justify-center
          gap-6 text-sm capitalize md:justify-between md:gap-4"
        >
          <li
            className="relative before:absolute before:-right-4
            before:top-0 before:text-sm before:content-['/']
            md:before:-right-3"
          >
            <Link className="hover:text-thirdColor" to="/">
              home
            </Link>
          </li>

          <li>
            <Link
              className={
                childRouteText
                  ? 'hover:text-thirdColor'
                  : 'cursor-default text-thirdColor'
              }
              to={urlRouteLink}
            >
              {slicedTitle}
            </Link>
          </li>

          {childRouteText && (
            <li
              className="relative before:absolute before:-left-4 before:top-0
              before:text-sm before:content-['/'] max-[330px]:before:top-1/2
              max-[330px]:before:-translate-y-1/2 md:before:-left-3"
            >
              <Link
                className={
                  grandChildRouteText
                    ? 'hover:text-thirdColor'
                    : 'cursor-default text-thirdColor'
                }
                to={childUrlRouteLink}
              >
                <span>{childRouteText}</span>
              </Link>
            </li>
          )}

          {grandChildRouteText && (
            <li
              className="relative cursor-default before:absolute before:-left-4
              before:top-0 before:text-sm before:content-['/'] max-[330px]:before:top-1/2
              max-[330px]:before:-translate-y-1/2 md:before:-left-3"
            >
              <span className="text-thirdColor">{grandChildRouteText}</span>
            </li>
          )}
        </ul>
      </Container>
    </div>
  );
}

export default PageTitle;
