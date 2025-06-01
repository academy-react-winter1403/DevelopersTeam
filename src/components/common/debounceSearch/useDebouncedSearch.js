import { useRef, useCallback } from "react";

const useDebouncedSearch = (delay = 700, callback) => {
  const ref = useRef();

  const onChange = useCallback(
    (e) => {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      ref.current = setTimeout(() => {
        callback(e.target.value);
      }, delay);
    },
    [delay, callback]
  );

  const onUnmount = useCallback(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
  }, []);

  return { onChange, onUnmount };
};

export default useDebouncedSearch;
