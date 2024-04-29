import { atom } from 'recoil';

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const addedProductToGlobalCartMenu = atom({
  key: 'addedProductToGlobalCart',
  default: [],
  effects: [localStorageEffect('globalCartProducts')],
});

export default addedProductToGlobalCartMenu;
