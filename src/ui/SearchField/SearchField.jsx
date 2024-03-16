import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { searchQuery } from '../../atoms/searchQuery';
import { searchedProductsError } from '../../atoms/error';
import { isSearchFiledProductsLoading } from '../../atoms/isLoading';
import { searchedProductsResult } from '../../atoms/searchedProductsResult';
import { useKey } from '../../hooks/useKey';
import { PropTypes } from 'prop-types';
import axios from 'axios';

import ShopNowBtn from '../../components/ShopNowBtn/ShopNowBtn';
import Input from '../../components/Input/Input';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SideProductBox from '../../components/SideProductBox/SideProductBox';

import { AiOutlineClose } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';

SearchField.propTypes = {
  el: PropTypes.object,
  setterFn: PropTypes.func,
};

function SearchField({ el, setterFn }) {
  const [query, setQuery] = useRecoilState(searchQuery);
  const [searchedProducts, setSearchedProducts] = useRecoilState(
    searchedProductsResult,
  );
  const [searchErrorMsg, setSearchErrorMsg] = useRecoilState(
    searchedProductsError,
  );
  const [isSearchProductsLoading, setIsSearchProductsLoading] = useRecoilState(
    isSearchFiledProductsLoading,
  );
  const searchInpEl = useRef(null);

  const queryLength = query.length;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchFunction = async () => {
      try {
        setIsSearchProductsLoading(true);
        setSearchErrorMsg('');
        const res = await axios.get(
          `https://fakestoreapi.com/products?sort=desc`,
          {
            signal,
          },
        );

        const data = Object.groupBy(res.data, ({ title }) =>
          title.toLowerCase().includes(query),
        );

        const resultedData = data.true ? data.true : [];

        if (res.status === 200 && data) {
          setSearchedProducts(resultedData);
          setSearchErrorMsg('');
        } else {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
      } catch ({ message }) {
        if (!signal.aborted) {
          setSearchErrorMsg(message);
        }
      } finally {
        setIsSearchProductsLoading(false);
      }

      if (queryLength < 3) {
        setSearchedProducts([]);
        setSearchErrorMsg('');
        return;
      }
    };
    fetchFunction();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const hanleSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  useKey('Enter', function () {
    if (document.activeElement === searchInpEl.current) return;
    searchInpEl.current.focus();
    setQuery('');
  });

  return (
    <>
      <div ref={el} className="absolute inset-0 bg-white opacity-90"></div>

      <form
        className="absolute left-1/2 top-1/2 z-[1000] flex w-2/3
        -translate-x-1/2 -translate-y-1/2 items-center justify-between"
        action="#"
        id="search-form"
        onSubmit={handleFormSubmit}
      >
        <Input
          styles="h-10 w-full border-b border-seventhColor
          bg-transparent py-1.5 text-sm font-normal text-secondaryColor
          outline-0 placeholder:text-black sm:text-xl"
          placeholder={!query ? 'Search...' : null}
          type="text"
          id="input-search"
          name="search-query"
          value={query}
          onChangeHandler={(e) => hanleSearchQuery(e)}
          elRef={searchInpEl}
        />

        <ShopNowBtn
          styles="absolute right-0"
          type="submit"
          text={<IoIosSearch />}
        />

        <div
          className={`scrollbar absolute left-1/2 top-[100%] z-[500] max-h-[450px]
          w-full -translate-x-1/2 space-y-5 overflow-y-auto overflow-x-hidden
          bg-white  shadow-[0_2px_5px_rgba(0,0,0,0.2)] sm:space-y-[30px] ${
            searchedProducts.length ? 'p-[15px]' : 'space-y-1'
          }`}
        >
          {isSearchProductsLoading && queryLength >= 3 && (
            <Loader styles="text-sm" />
          )}

          {!isSearchProductsLoading &&
            !searchErrorMsg &&
            searchedProducts?.map((product) => (
              <SideProductBox key={product.id} product={product} />
            ))}

          {searchedProducts.length === 0 &&
            !isSearchProductsLoading &&
            queryLength >= 3 && (
              <p className="text-center font-medium">
                This product name is not found
              </p>
            )}

          {searchErrorMsg && <ErrorMessage msg={searchErrorMsg} />}
        </div>
      </form>

      <span
        className="absolute right-1 top-1 cursor-pointer text-xl
        hover:text-thirdColor md:right-3 md:top-3"
        onClick={setterFn}
      >
        <AiOutlineClose />
      </span>
    </>
  );
}

export default SearchField;
