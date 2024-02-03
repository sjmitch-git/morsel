import AsyncStorage from "@react-native-async-storage/async-storage";

const saveMessages = async (messages) => {
  try {
    await AsyncStorage.setItem("messages", JSON.stringify(messages));
  } catch (error) {
    console.error("Error saving messages:", error);
  }
};

const getMessages = async () => {
  try {
    const storedMessages = await AsyncStorage.getItem("messages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  } catch (error) {
    console.error("Error getting messages:", error);
    return [];
  }
};

const clearMessages = async () => {
  try {
    await AsyncStorage.removeItem("messages");
  } catch (error) {
    console.error("Error clearing messages:", error);
  }
};

const clearMessage = async (timestamp) => {
  try {
    const storedMessages = await AsyncStorage.getItem("messages");
    let messages = storedMessages ? JSON.parse(storedMessages) : [];

    messages = messages.filter((message) => message.timestamp !== timestamp);

    await AsyncStorage.setItem("messages", JSON.stringify(messages));
  } catch (error) {
    console.error("Error clearing message:", error);
  }
};

export { saveMessages, getMessages, clearMessages, clearMessage };
