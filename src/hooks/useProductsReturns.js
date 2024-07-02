import { useNavigate } from 'react-router-dom';

import useUserCart from './useUserCart';

import Swal from 'sweetalert2';

function useProductsReturns() {
  const navigate = useNavigate();

  const { setLoggedUsers, currentUser, checkLoggedUser } = useUserCart();

  const handleProductReturn = ({
    productToReturn,
    orderId,
    orderDate,
    isReturnedBefore = false,
  }) => {
    const returnId = crypto.randomUUID();

    const dateObj = new Date();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const dateAdded = `${day}/${month}/${year}`;

    const existingReturnedProduct = checkLoggedUser?.returnedProducts.find(
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
                      isReturnedBefore,
                    },
                  ],
            }
          : user,
      );
    });

    if (existingReturnedProduct?.isReturnedBefore) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'The product already exist in your returns.',
        showConfirmButton: false,
        timer: 3000,
      });
    } else {
      navigate(
        `/account/return-requests/order_id=${orderId.slice(0, 7)}/product_id=${
          productToReturn?.id
        }`,
      );
    }
  };

  return handleProductReturn;
}

export default useProductsReturns;
