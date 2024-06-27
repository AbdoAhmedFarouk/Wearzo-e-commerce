import { useNavigate } from 'react-router-dom';

import useUserCart from './useUserCart';

import Swal from 'sweetalert2';

function useProductsReturns() {
  const navigate = useNavigate();

  const { setLoggedUsers, currentUser, checkLoggedUser } = useUserCart();

  const handleProductReturn = (productToReturn, orderId, orderDate) => {
    const returnId = crypto.randomUUID();

    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const dateAdded = `${day}/${month}/${year}`;

    const existingReturnedProduct = checkLoggedUser?.returnedProducts.some(
      (product) =>
        product.orderId === orderId && product.id === productToReturn.id,
    );

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,

              returnedProducts: existingReturnedProduct
                ? [...user.returnedProducts]
                : [
                    ...user.returnedProducts,

                    {
                      ...productToReturn,
                      orderId,
                      dateAdded,
                      returnId,
                      orderDate,
                      isReturnedBefore: true,
                    },
                  ],
            }
          : user,
      );
    });

    if (existingReturnedProduct) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'The product already exist in your returns.',
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      navigate('/account/return-requests');
    }
  };

  return handleProductReturn;
}

export default useProductsReturns;
