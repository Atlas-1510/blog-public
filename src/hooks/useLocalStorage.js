import { useState, useCallback } from "react";
// https://stackoverflow.com/questions/62105880/react-context-api-vs-local-storage

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
      } catch (err) {
        console.log(err);
      }
    },
    [key]
  );

  return [storedValue, setValue];
}

export default useLocalStorage;
