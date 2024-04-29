import { PropTypes } from 'prop-types';

import H2Header from '../../components/H2Header/H2Header';
import Loader from '../../components/Loader/Loader';
import ProductBox from '../../components/ProductBox/ProductBox';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

ProductBoxContainer.propTypes = {
  isLoadingState: PropTypes.bool,
  productsState: PropTypes.array,
  text: PropTypes.string,
  parentStyles: PropTypes.string,
  sliceMethodStartNum: PropTypes.number,
  sliceMethodEndNum: PropTypes.number,
  childStyles: PropTypes.string,
  isHeaderShown: PropTypes.bool,
  errorMsg: PropTypes.string,
};

function ProductBoxContainer({
  productsState,
  isLoadingState,
  errorMsg,
  text,
  parentStyles,
  childStyles,
  sliceMethodStartNum,
  sliceMethodEndNum,
  isHeaderShown,
}) {
  return (
    <div className={parentStyles ? parentStyles : ''}>
      {isHeaderShown && <H2Header header={text} />}

      {isLoadingState && <Loader />}

      {!isLoadingState && !errorMsg && (
        <div className={childStyles}>
          {productsState
            .slice(sliceMethodStartNum, sliceMethodEndNum)
            .map((product) => (
              <div key={product.id}>
                <ProductBox product={product} />
              </div>
            ))}
        </div>
      )}

      {errorMsg && <ErrorMessage msg={errorMsg} />}
    </div>
  );
}

export default ProductBoxContainer;
