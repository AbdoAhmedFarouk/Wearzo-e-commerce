import isProductFoundAlert from './isProductFoundAlert';

function useAddProductToCartHandler(
  product,
  setAddedProductToCart,
  isProductFound,
) {
  const handleAddProductToCart = () => {
    const productObj = {
      id: product?.id,
      title: product?.title,
      price: product?.price,
      img: product?.image,
      quantity: 1,
      discount: product?.discount,
    };

    setAddedProductToCart((prevProducts) => {
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

    isProductFoundAlert(isProductFound);
  };

  return handleAddProductToCart;
}

export default useAddProductToCartHandler;
