import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useIsOpen } from '../../hooks/useIsOpen';
import { isMobileSpecialPageSideProductMenuOpened } from '../../atoms/isOpened';
import {
  specialProductsInSpecialPage,
  specialSideMenuProductsInSpecialPage,
} from '../../atoms/products';
import {
  isSpecialProductsInSpecialPageLoading,
  isSpecialSideMenuProductsLoadingInSpecialPage,
} from '../../atoms/isLoading';
import {
  specialPageProductsError,
  specialSideMenuProductsErrorInSpecialPage,
} from '../../atoms/error';
import { selectSortedProductsInSpecialPage } from '../../atoms/selectSortProducts';
import { specialProductsShownStlye } from '../../atoms/specialProductsShownStlye';

import useLimitProductsUseEffect from '../../hooks/useLimitProductsUseEffect';
import axios from 'axios';

import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import SideBarBanner from '../../components/SideBarBanner/SideBarBanner';
import MobileMenuHeader from '../../components/MobileMenuHeader/MobileMenuHeader';
import SpecialProductsCol from '../../components/SpecialProductsCol/SpecialProductsCol';
import ProductBoxContainer from '../../components/ProductBoxContainer/ProductBoxContainer';
import SideProductBoxContainer from '../../components/SideProductBoxContainer/SideProductBoxContainer';

import { IoGridOutline } from 'react-icons/io5';
import { CiCircleList } from 'react-icons/ci';

function SpecialPage() {
  const [
    isMobileSpecialPageSideProductMenuOpen,
    setIsMobileSpecialPageSideProductMenuOpen,
  ] = useRecoilState(isMobileSpecialPageSideProductMenuOpened);

  const [specialProducts, setSpecialProducts] = useRecoilState(
    specialProductsInSpecialPage,
  );
  const [isSpecialProductsLoading, setIsSpecialProductsLoading] =
    useRecoilState(isSpecialProductsInSpecialPageLoading);
  const [specialPageError, setSpecialPageError] = useRecoilState(
    specialPageProductsError,
  );

  const [specialSideMenuProducts, setSpecialSideMenuProducts] = useRecoilState(
    specialSideMenuProductsInSpecialPage,
  );

  const [
    isSpecialSideMenuProductsLoading,
    setIsSpecialSideMenuProductsLoading,
  ] = useRecoilState(isSpecialSideMenuProductsLoadingInSpecialPage);
  const [specialSideMenuProductsError, setSpecialSideMenuProductsError] =
    useRecoilState(specialSideMenuProductsErrorInSpecialPage);

  const [sortedProducts, setSortedProducts] = useRecoilState(
    selectSortedProductsInSpecialPage,
  );

  const [productsShownStyle, setProductsShownStyle] = useRecoilState(
    specialProductsShownStlye,
  );

  const openSideProductListFn = useIsOpen(
    isMobileSpecialPageSideProductMenuOpen,
    setIsMobileSpecialPageSideProductMenuOpen,
  );

  const handleSortSubmit = (e) => {
    setSortedProducts({ selectValue: e.target.value });
  };

  const handleRowActiveTab = () => {
    setProductsShownStyle('row');
  };

  const handleColActiveTab = () => {
    setProductsShownStyle('col');
  };

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        setIsSpecialProductsLoading(true);
        setSpecialPageError('');
        const res = await axios.get(`http://localhost:8000/products`);

        if (res.status !== 200) {
          throw new Error('error with fetching products');
        }

        if (sortedProducts['selectValue'] === 'Name, A to Z') {
          res.data.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortedProducts['selectValue'] === 'Name, Z to A') {
          res.data.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortedProducts['selectValue'] === 'Price, low to high') {
          res.data.sort((a, b) => a.price - b.price);
        } else {
          res.data.sort((a, b) => b.price - a.price);
        }

        setSpecialProducts(res.data);
        setSpecialPageError('');
      } catch ({ message }) {
        setSpecialPageError(message);
      } finally {
        setIsSpecialProductsLoading(false);
      }
    };
    fetchFunction();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedProducts]);

  useLimitProductsUseEffect(
    setSpecialSideMenuProducts,
    setIsSpecialSideMenuProductsLoading,
    setSpecialSideMenuProductsError,
  );

  return (
    <SectionTag>
      <PageTitle text="prices drop" />

      <div>
        <Container styles="grid md:grid-cols-16 gap-[30px]">
          <div>
            <MobileMenuHeader
              styles="flex items-center justify-between bg-primaryColor
              xxxs:px-5 xxxs:py-[15px] text-white px-3 py-2.5"
              spanStyles="text-lg duration-500 md:hidden"
              isOpen={isMobileSpecialPageSideProductMenuOpen}
              onClick={openSideProductListFn}
            >
              <h3
                className="text-base font-medium uppercase leading-5
                md:text-sm"
              >
                bestsellers
              </h3>
            </MobileMenuHeader>

            <SideProductBoxContainer
              productsState={specialSideMenuProducts}
              isLoading={isSpecialSideMenuProductsLoading}
              errorState={specialSideMenuProductsError}
              isListMenuOpen={isMobileSpecialPageSideProductMenuOpen}
            />

            <SideBarBanner />
          </div>

          <div>
            <div
              className={`mb-5 grid grid-cols-1 items-center gap-2.5 bg-white p-2.5
              text-primaryColor shadow-[0_0_20px_1px_rgba(0,0,0,0.05)]
              duration-300 md:mb-[30px] md:grid-cols-[1fr_1fr] md:gap-[30px]
              md:px-5 md:py-2.5 ${
                isMobileSpecialPageSideProductMenuOpen
                  ? 'mt-0'
                  : '-mt-10 md:mt-0'
              }`}
            >
              <div className="flex items-center justify-between md:justify-normal">
                <div className="flex items-center text-xl">
                  <span
                    className={`me-1.5 grid h-[30px] w-[30px] place-items-center
                    bg-fifthColor leading-10 text-white hover:bg-primaryColor
                    md:h-10 md:w-10 ${
                      productsShownStyle === 'row' ? 'bg-primaryColor' : ''
                    }`}
                    onClick={handleRowActiveTab}
                  >
                    <i>
                      <IoGridOutline />
                    </i>
                  </span>

                  <span
                    className={`me-1.5 grid h-[30px] w-[30px] place-items-center
                    bg-fifthColor leading-10 text-white hover:bg-primaryColor
                    md:h-10 md:w-10 ${
                      productsShownStyle === 'col' ? 'bg-primaryColor' : ''
                    }`}
                    onClick={handleColActiveTab}
                  >
                    <i>
                      <CiCircleList />
                    </i>
                  </span>
                </div>

                <p className="p-0 text-sm leading-[30px] md:py-2 md:ps-[30px]">
                  There are {specialProducts.length} products.
                </p>
              </div>

              <div className="md:grid md:grid-cols-12 md:items-center md:gap-[15px]">
                <span className="hidden text-right text-sm capitalize md:col-span-4 md:block">
                  sort by:
                </span>

                <div className="md:col-span-8">
                  <select
                    name="sort"
                    id="sort"
                    value={sortedProducts.selectValue}
                    onChange={(e) => handleSortSubmit(e)}
                    className="relative w-full cursor-pointer items-center border-0 bg-fifthColor
                    px-2.5 py-[5px] text-left leading-6 text-secondaryColor outline-0 md:py-[7px]"
                  >
                    <option value="Name, A to Z">Name, A to Z</option>
                    <option value="Name, Z to A">Name, Z to A</option>
                    <option value="Price, low to high">
                      Price, low to high
                    </option>
                    <option value="Price, high to low">
                      Price, high to low
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {productsShownStyle === 'row' ? (
              <ProductBoxContainer
                childStyles="grid grid-cols-1 gap-5 duration-700 xxs:grid-cols-2
                sm:grid-cols-3 sm:gap-[15px] md:gap-[30px] lg:grid-cols-4 mt-0"
                errorMsg={specialPageError}
                loaderStyles="m-auto w-fit"
                productsState={specialProducts}
                isLoadingState={isSpecialProductsLoading}
                isHeaderShown={false}
              />
            ) : (
              <>
                {specialProducts.map((product) => (
                  <div
                    key={product.id}
                    className="mb-[30px] flex flex-col items-center justify-center
                    text-center text-sm text-primaryColor last:mb-0 sm:flex-row
                    sm:justify-normal sm:text-left sm:text-base"
                  >
                    <SpecialProductsCol product={product} />
                  </div>
                ))}
              </>
            )}
          </div>
        </Container>
      </div>
    </SectionTag>
  );
}

export default SpecialPage;
