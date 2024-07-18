import { PropTypes } from 'prop-types';

import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';

CheckoutDropdownPanel.propTypes = {
  headerText: PropTypes.string,
  parentStyles: PropTypes.string,
  isOpen: PropTypes.bool,
  onClickHandler: PropTypes.func,
  arrowSpanStyles: PropTypes.any,
  children: PropTypes.node,
  parentDivStyles: PropTypes.string,
};

const styles = `w-full rounded border border-[#ddd] bg-fifthColor
px-[15px] py-2.5 flex items-center justify-between`;

function CheckoutDropdownPanel({
  headerText,
  isOpen,
  onClickHandler,
  parentStyles,
  arrowSpanStyles,
  children,
  parentDivStyles,
}) {
  return (
    <div className={`text-sm ${parentDivStyles ? parentDivStyles : ''}`}>
      <MobileMenuHeader
        styles={`${styles} ${parentStyles ? parentStyles : ''}`}
        spanStyles={`text-lg ${arrowSpanStyles ? arrowSpanStyles : ''}`}
        isOpen={isOpen}
        onClick={onClickHandler}
      >
        <h4 className="text-sm font-medium uppercase leading-5 xxs:text-base">
          <a>{headerText}</a>
        </h4>
      </MobileMenuHeader>

      {children}
    </div>
  );
}

export default CheckoutDropdownPanel;
