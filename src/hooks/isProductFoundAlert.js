import Swal from 'sweetalert2';

function isProductFoundAlert(existingProduct) {
  if (existingProduct) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'The product quantity increased by one',
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'The product has been added successfully',
      showConfirmButton: false,
      timer: 3000,
    });
  }
}

export default isProductFoundAlert;
