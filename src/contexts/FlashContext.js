import React, { createContext, useState, useContext } from "react";

const FlashContext = createContext();

export const FlashProvider = ({ children }) => {
  const [flashState, setFlashState] = useState({
    torchOn: false,
    duration: 0,
    sleep: 0,
  });

  const setFlash = (newFlashState) => {
    setFlashState((prevFlashState) => ({ ...prevFlashState, ...newFlashState }));
  };

  return <FlashContext.Provider value={{ flashState, setFlash }}>{children}</FlashContext.Provider>;
};

export const useFlash = () => {
  const context = useContext(FlashContext);
  if (!context) {
    throw new Error("useFlash must be used within a FlashProvider");
  }
  return context;
};
