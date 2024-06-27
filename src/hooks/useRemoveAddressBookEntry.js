import useUserCart from './useUserCart';

import Swal from 'sweetalert2';

function useRemoveAddressBookEntry() {
  const { setLoggedUsers, currentUser } = useUserCart();

  const handleDeleteAddressBookEntry = (addressEntry) => {
    Swal.fire({
      title: `Are you sure you want to delete this address "${addressEntry}" ?`,
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
                  otherAddresses: user.otherAddresses.filter(
                    (address) => address.address !== addressEntry,
                  ),
                }
              : user,
          );
        });

        Swal.fire({
          title: 'Deleted!',
          text: 'The address has been deleted successfully.',
          icon: 'success',
        });
      }
    });
  };
  return handleDeleteAddressBookEntry;
}

export default useRemoveAddressBookEntry;
