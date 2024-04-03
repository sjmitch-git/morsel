import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
// import ChatScreen from "@/screens/ChatScreen";
import ComposeScreen from "@/screens/ComposeScreen";
import TorchScreen from "@/screens/TorchScreen";
import Layout from "@/structure/Layout";
import Header from "@/structure/Header";
import { Constants, lightTheme, darkTheme } from "@/styles";
import { useDarkMode } from "@/contexts/DarkModeContext";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.backgroundColor,
          text: theme.textColor,
        },
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Morsel") {
              iconName = "home";
            } else if (route.name === "Send") {
              iconName = "create";
            } else if (route.name === "Chat") {
              iconName = "text";
            } else if (route.name === "Torch") {
              iconName = "flashlight-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: [
            {
              //  backgroundColor: isDarkMode ? Constants.darkColor : Constants.lightColor,
              backgroundColor: Constants.primaryColorDark,
              borderWidth: 0,
              paddingTop: Platform.OS === "web" ? 0 : 8,
            },
            null,
          ],
          header: () => <Header />,
          tabBarActiveTintColor: Constants.activeColor,
          tabBarInactiveTintColor: Constants.inactiveColor,
          tabBarLabel: "",
        })}
      >
        <Tab.Screen name="Morsel">
          {() => (
            <Layout>
              <HomeScreen />
            </Layout>
          )}
        </Tab.Screen>
        <Tab.Screen name="Send">
          {() => (
            <Layout>
              <ComposeScreen />
            </Layout>
          )}
        </Tab.Screen>
        {/* <Tab.Screen name="Chat">
          {() => (
            <Layout>
              <ChatScreen />
            </Layout>
          )}
        </Tab.Screen> */}
        <Tab.Screen name="Torch">
          {() => (
            <Layout>
              <TorchScreen />
            </Layout>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
