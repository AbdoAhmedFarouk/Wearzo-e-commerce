import { atom } from 'recoil';

const isCheckoutPageDeliveryDetailsPanelOpened = atom({
  key: 'isCheckoutPageDeliveryDetailsPanelOpen',
  default: true,
});

const isCheckoutPagePaymentMethodPanelOpened = atom({
  key: 'isCheckoutPagePaymentMethodPanelOpen',
  default: false,
});

const isCheckoutPageConfirmOrderPanelOpened = atom({
  key: 'isCheckoutPageConfirmOrderPanelOpen',
  default: false,
});

export {
  isCheckoutPageDeliveryDetailsPanelOpened,
  isCheckoutPagePaymentMethodPanelOpened,
  isCheckoutPageConfirmOrderPanelOpened,
};
