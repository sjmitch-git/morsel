import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ExpoConstants from "expo-constants";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const loadDarkModePreference = async () => {
      try {
        const darkModePreference = await AsyncStorage.getItem("isDarkMode");
        if (darkModePreference !== null) {
          setIsDarkMode(JSON.parse(darkModePreference));
        } else setIsDarkMode(ExpoConstants.expoConfig.theme.dark ?? false);
      } catch (error) {
        setIsDarkMode(ExpoConstants.expoConfig.theme.dark ?? false);
      }
    };

    loadDarkModePreference();
  }, []);

  const toggleDarkMode = async (value) => {
    setIsDarkMode(value);
    try {
      await AsyncStorage.setItem("isDarkMode", JSON.stringify(value));
    } catch (error) {
      console.error("Error saving dark mode preference:", error);
    }
  };

  if (isDarkMode === null) {
    return null;
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
