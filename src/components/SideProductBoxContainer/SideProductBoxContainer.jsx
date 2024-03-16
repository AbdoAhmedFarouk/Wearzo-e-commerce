import { PropTypes } from 'prop-types';

import Loader from '../../components/Loader/Loader';
import SideProductBox from '../../components/SideProductBox/SideProductBox';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

SideProductBoxContainer.propTypes = {
  productsState: PropTypes.array,
  isLoading: PropTypes.bool,
  isListMenuOpen: PropTypes.bool,
  errorState: PropTypes.string,
};

function SideProductBoxContainer({
  productsState,
  isLoading,
  errorState,
  isListMenuOpen,
}) {
  return (
    <>
      <div
        className="hidden min-h-[460px] space-y-[30px] bg-white
        p-[15px] shadow-[0_0_20px_1px_rgba(0,0,0,0.05)] md:block
        md:p-5 2xl:px-5 2xl:py-[30px]"
      >
        {isLoading && <Loader />}

        {!isLoading &&
          !errorState &&
          productsState.map((item) => (
            <SideProductBox product={item} key={item.id} />
          ))}

        {errorState && <ErrorMessage msg={errorState} />}
      </div>

      {isListMenuOpen ? (
        <div
          className="visible h-[582.08px] space-y-5
          overflow-hidden bg-white p-[15px] opacity-100
          shadow-[0_0_20px_1px_rgba(0,0,0,0.05)] duration-700
          sm:h-[352.69px] md:hidden md:space-y-[30px]"
        >
          {isLoading && <Loader />}

          {!isLoading &&
            !errorState &&
            productsState.map((item) => (
              <SideProductBox product={item} key={item.id} />
            ))}

          {errorState && <ErrorMessage msg={errorState} />}
        </div>
      ) : (
        <div
          className="invisible h-0 space-y-5
          overflow-hidden bg-white p-[15px] opacity-0
          shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
          duration-700 md:hidden md:space-y-[30px]"
        >
          {isLoading && <Loader />}

          {!isLoading &&
            !errorState &&
            productsState.map((item) => (
              <SideProductBox product={item} key={item.id} />
            ))}

          {errorState && <ErrorMessage msg={errorState} />}
        </div>
      )}
    </>
  );
}

export default SideProductBoxContainer;
