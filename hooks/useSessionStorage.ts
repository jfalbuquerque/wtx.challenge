import { useState, useEffect } from "react";

const useSessionStorage = ({
  key,
  initialValue,
}: {
  key: string;
  initialValue?: any;
}) => {
  const [state, setState] = useState(() => {
    try {
      const sessionStorageValue = sessionStorage.getItem(key);

      if (!sessionStorageValue && initialValue) {
        sessionStorage.setItem(key, JSON.stringify(initialValue));

        return initialValue;
      }

      return JSON.parse(sessionStorageValue || '');
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (state) {
        sessionStorage.setItem(key, JSON.stringify(state));
      }
    } catch {
      //
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return [state, setState];
};

export default useSessionStorage;
