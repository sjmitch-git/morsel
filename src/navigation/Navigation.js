import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import ChatScreen from "@/screens/ChatScreen";
import ComposeScreen from "@/screens/ComposeScreen";
import Layout from "@/structure/Layout";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Compose") {
              iconName = "create";
            } else if (route.name === "Chat") {
              iconName = "text";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarActiveTintColor="blue"
        tabBarInactiveTintColor="gray"
        tabBarStyle={{ display: "flex" }}
        headerShown={false}
      >
        <Tab.Screen name="Home" options={{ title: "Overview" }}>
          {() => (
            <Layout>
              <HomeScreen />
            </Layout>
          )}
        </Tab.Screen>
        <Tab.Screen name="Compose">
          {() => (
            <Layout>
              <ComposeScreen />
            </Layout>
          )}
        </Tab.Screen>
        <Tab.Screen name="Chat">
          {() => (
            <Layout>
              <ChatScreen />
            </Layout>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
