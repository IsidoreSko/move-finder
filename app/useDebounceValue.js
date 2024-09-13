import { useEffect, useState } from "react";

export const useDebounceValue = (value, delayMs) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
    };
  }, [delayMs, value]);

  return debounceValue;
};
