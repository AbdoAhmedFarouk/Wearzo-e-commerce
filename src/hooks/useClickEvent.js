import { useEffect } from 'react';

export function useClickEvent(el, action) {
  useEffect(() => {
    const callback = (e) => {
      if (e.target === el.current) action();
    };

    window.addEventListener('click', callback);

    return () => window.removeEventListener('click', callback);
  }, [el, action]);
}


