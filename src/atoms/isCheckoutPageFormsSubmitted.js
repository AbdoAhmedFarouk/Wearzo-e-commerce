import { atom } from 'recoil';

const isCheckoutPageDeliveryDetailsFormSubmitted = atom({
  key: 'isCheckoutPageDeliveryDetailsFormSubmit',
  default: false,
});

const isCheckoutPagePaymentMethodFormSubmitted = atom({
  key: 'isCheckoutPagePaymentMethodFormSubmit',
  default: false,
});

export {
  isCheckoutPageDeliveryDetailsFormSubmitted,
  isCheckoutPagePaymentMethodFormSubmitted,
};
