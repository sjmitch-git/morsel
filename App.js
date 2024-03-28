import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { DarkModeProvider, useDarkMode } from "@/contexts/DarkModeContext";
import Navigation from "@/navigation/Navigation";

const App = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

const AppContent = () => {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode !== null) {
      SplashScreen.hideAsync();
    }
  }, [isDarkMode]);

  if (isDarkMode === null) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </SafeAreaView>
  );
};

export default App;
