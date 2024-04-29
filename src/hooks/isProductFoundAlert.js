import Swal from 'sweetalert2';

function isProductFoundAlert(
  existingProduct,
  addedSuccessfullyText,
  productIncreasedText,
  icon,
) {
  if (existingProduct) {
    Swal.fire({
      position: 'center',
      icon: `${icon ? icon : 'success'}`,
      title: `${productIncreasedText}`,
      showConfirmButton: false,
      timer: 3000,
    });
  } else {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `${addedSuccessfullyText}`,
      showConfirmButton: false,
      timer: 3000,
    });
  }

  return null;
}

export default isProductFoundAlert;
