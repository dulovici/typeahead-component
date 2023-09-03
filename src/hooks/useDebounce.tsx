import { useEffect } from "react";

export const useDebounce = (callback: any, delay: number) => {
  let timeout: number;

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const debounceFunction = (...args: any[]) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debounceFunction;
};
