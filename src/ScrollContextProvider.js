import React, { useState, useCallback, useEffect, useContext } from "react";

export const ScrollContext = React.createContext({ scrollY: 0 });

// Allow other components to get access to the current
// window.scrollY dynamically
export const ScrollContextProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const scrollListener = useCallback(() => setScrollY(window.scrollY), [
    setScrollY,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [setScrollY, scrollListener]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
