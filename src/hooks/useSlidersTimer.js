import { useEffect } from 'react';

export function useSlidersTimer(state, setState, delay, imgsLegnth) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prevState) =>
        prevState === imgsLegnth - 1 ? 0 : prevState + 1,
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [state, setState, delay, imgsLegnth]);
}
