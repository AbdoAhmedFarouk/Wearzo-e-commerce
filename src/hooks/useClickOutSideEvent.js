import { useEffect } from 'react';

export function useClickOutSideEvent(el, action) {
  useEffect(() => {
    const callback = () => {
      window.addEventListener('click', (e) => {
        if (!el.current.contains(e.target)) action();
      });
    };
    callback();

    return () => window.removeEventListener('click', callback);
  }, [el, action]);
}
