import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isProductInProductPageLoading } from '../../atoms/isLoading';
import { PropTypes } from 'prop-types';
import { toggleProducts } from '../../atoms/toggleSlider';
import clickedProduct from '../../atoms/product';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import productsData from '../../assets/products';

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

ProductIconInProductPage.propTypes = {
  errorMsg: PropTypes.string,
};

function ProductIconInProductPage({ errorMsg }) {
  const [productImgs, setProductImgs] = useRecoilState(toggleProducts);
  const chosenProduct = useRecoilValue(clickedProduct);
  const isProductLoading = useRecoilValue(isProductInProductPageLoading);

  const imgEl = useRef(null);

  const handleImgsSlidingUp = () => {
    setProductImgs((prevImg) => (prevImg === 1.5 ? prevImg - 1.5 : prevImg));
  };

  const handleImgsSlidingDown = () => {
    setProductImgs((prevImg) => (prevImg === 1.5 ? prevImg : prevImg + 1.5));
  };

  const handleChangeImgSrc = (imgSrc) => {
    imgEl.current.src = imgSrc;
  };

  return (
    <div className="sm:col-span-6">
      {isProductLoading && <Loader />}

      {!isProductLoading && !errorMsg && (
        <div className="sm:flex sm:items-center">
          <div
            className="hidden h-[583px] max-w-[75px]
            overflow-hidden md:block"
          >
            <button
              className={`m-auto mb-3 flex h-[30px] w-[30px]
              cursor-pointer items-center justify-center border-0
              text-2xl outline-0 ${
                productImgs === 0 ? 'cursor-not-allowed' : 'cursor-default'
              }`}
              onClick={handleImgsSlidingUp}
            >
              <MdKeyboardArrowUp />
            </button>

            <div className="h-[490px] overflow-hidden">
              <div
                className="overflow-hidden duration-500"
                style={{
                  transform: `translate3d(0, ${-productImgs * 100}px, 0)`,
                }}
              >
                <ul>
                  {productsData.map((img) => (
                    <li
                      key={img.id}
                      className="mb-2 cursor-pointer last:mb-0"
                      onClick={() => handleChangeImgSrc(img.image)}
                    >
                      <img
                        className="h-[100px] max-w-full object-contain"
                        src={img.image}
                        alt={img.image}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className={`m-auto mt-3 flex h-[30px] w-[30px]
              cursor-pointer items-center justify-center border-0
              text-2xl outline-0 ${
                productImgs === 0 ? 'cursor-default' : 'cursor-not-allowed'
              }`}
              onClick={handleImgsSlidingDown}
            >
              <MdKeyboardArrowDown />
            </button>
          </div>

          <div className="md:ms-[30px] md:h-[755px]">
            <img
              className="h-[200px] w-full object-contain xxs:h-[250px] sm:h-full"
              src={chosenProduct?.image}
              alt={chosenProduct?.image}
              ref={imgEl}
            />
          </div>
        </div>
      )}

      {errorMsg && <ErrorMessage msg={errorMsg} />}
    </div>
  );
}

export default ProductIconInProductPage;
