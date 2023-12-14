import { useEffect } from 'react';

export function useKey(el, action) {
  useEffect(() => {
    const callback = () => {
      window.addEventListener('click', (e) => {
        if (e.target === el.current) action();
      });
    };
    callback();

    return () => window.removeEventListener('click', callback);
  }, [el, action]);
}
