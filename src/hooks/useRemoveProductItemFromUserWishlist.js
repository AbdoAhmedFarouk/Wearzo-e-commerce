import useUserCart from './useUserCart';

import Swal from 'sweetalert2';

function useRemoveProductItemFromUserWishlist() {
  const { setLoggedUsers, currentUser } = useUserCart();

  const handleRemoveProductItemFromUserWishlist = (productTitle, productId) => {
    Swal.fire({
      title: `Are you sure you want to delete this product ${productTitle} from your wishlist ?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoggedUsers((users) => {
          return users.map((user) =>
            user.email === currentUser?.email
              ? {
                  ...user,
                  wishList: user.wishList.filter(
                    (item) => item.id !== productId,
                  ),
                }
              : user,
          );
        });

        Swal.fire({
          title: 'Deleted!',
          text: 'The product has been deleted successfully from your wishlist.',
          icon: 'success',
        });
      }
    });
  };

  return handleRemoveProductItemFromUserWishlist;
}

export default useRemoveProductItemFromUserWishlist;
