import isProductFoundAlert from './isProductFoundAlert';

function useAddProductsToGlobalCart(
  product,
  setAddedProductToGlobalCart,
  isProductFound,
  addedSuccessfullyText,
  productIncreasedText,
) {
  const handleAddProductToGlobalCart = () => {
    const productObj = {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      img: product?.image,
      quantity: 1,
      discount: product?.discount,
    };

    setAddedProductToGlobalCart((prevProducts) => {
      if (isProductFound) {
        return prevProducts.map((item) =>
          item.id === productObj.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevProducts, productObj];
      }
    });

    isProductFoundAlert(
      isProductFound,
      addedSuccessfullyText,
      productIncreasedText,
    );
  };

  return handleAddProductToGlobalCart;
}

export default useAddProductsToGlobalCart;
