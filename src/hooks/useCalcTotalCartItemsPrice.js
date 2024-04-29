function useCalcTotalCartItemsPrice(addedProductToCart) {
  const totalCartItemsPrice =
    addedProductToCart?.length > 0
      ? addedProductToCart
          .map((item) => (item.price - item.discount) * item.quantity)
          .reduce((total, price) => total + price)
          .toFixed(2)
      : 0;

  return totalCartItemsPrice;
}

export default useCalcTotalCartItemsPrice;
