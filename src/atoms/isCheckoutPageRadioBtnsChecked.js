import { atom } from 'recoil';

const isCheckoutPageAddressRadioBtnChecked = atom({
  key: 'isCheckoutPageAddressRadioBtnCheck',
  default: false,
});

const isCheckoutPagePaymentMethodRadioBtnChecked = atom({
  key: 'isCheckoutPagePaymentMethodRadioBtnCheck',
  default: false,
});

export {
  isCheckoutPageAddressRadioBtnChecked,
  isCheckoutPagePaymentMethodRadioBtnChecked,
};
