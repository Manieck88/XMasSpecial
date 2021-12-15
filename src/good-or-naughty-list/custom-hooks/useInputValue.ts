import { useState } from "react";
export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);
  return {
    inputValue,
    changeInput: (event: React.ChangeEvent<HTMLInputElement>) =>
      setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event: React.KeyboardEvent, callback: (val: string) => void) => {
      if (event.key === "ENTER") {
        callback(inputValue);
        return true;
      }
      return false;
    },
  };
};
