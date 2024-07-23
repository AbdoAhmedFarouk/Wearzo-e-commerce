import Swal from 'sweetalert2';
import useUserCart from './useUserCart';
import { useNavigate } from 'react-router-dom';

function useAddProductsToCompareList() {
  const navigate = useNavigate();

  const { setLoggedUsers, currentUser, checkLoggedUser } = useUserCart();

  const handleAddProductToComparison = (productId, productObj) => {
    const existingProductInUserComparisonList =
      checkLoggedUser?.comparedProducts?.find((item) => item.id === productId);

    setLoggedUsers((users) => {
      return users.map((user) =>
        user.email === currentUser?.email
          ? {
              ...user,

              comparedProducts: existingProductInUserComparisonList
                ? [...user.comparedProducts]
                : user.comparedProducts.length < 4
                ? [...user.comparedProducts, productObj]
                : [...user.comparedProducts.slice(1), productObj],
            }
          : user,
      );
    });

    if (!existingProductInUserComparisonList) {
      Swal.fire({
        title:
          'The product has been successfully added to your comparison list.',
        text: 'Do you want to go to the comparison page ?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, I do.',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/compare');
        }
      });
    }
  };

  return handleAddProductToComparison;
}

export default useAddProductsToCompareList;
