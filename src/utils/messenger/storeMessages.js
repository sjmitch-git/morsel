import AsyncStorage from "@react-native-async-storage/async-storage";

const saveMessages = async (messages) => {
  try {
    await AsyncStorage.setItem("messages", JSON.stringify(messages));
  } catch (error) {
    console.error("Error saving messages:", error);
    throw new Error("Error saving messages");
  }
};

const getMessages = async () => {
  try {
    const storedMessages = await AsyncStorage.getItem("messages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  } catch (error) {
    console.error("Error getting messages:", error);
    throw new Error("Failed to retrieve messages");
  }
};

const clearMessages = async () => {
  try {
    await AsyncStorage.removeItem("messages");
  } catch (error) {
    console.error("Error clearing messages:", error);
    throw new Error("Error clearing messages");
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
    throw new Error("Error clearing message");
  }
};

export { saveMessages, getMessages, clearMessages, clearMessage };
