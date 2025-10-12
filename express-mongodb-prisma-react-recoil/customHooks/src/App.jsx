import React, { useEffect, useRef, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(0);
  const valueRef = useRef();
  useEffect(() => {
    valueRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(valueRef.current);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
      <div style={{ display: "flex", flexDirection: "col" }}>
        {debouncedValue}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default SearchBar;
