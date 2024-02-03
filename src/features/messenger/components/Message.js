// features/messenger/components/Message.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "@/themes";

const Message = ({ text, type }) => {
  const messageStyle = type === "outbound" ? styles.outbound : styles.inbound;

  return (
    <View style={[styles.messageContainer, messageStyle]}>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: "80%", // Adjust based on your layout
  },
  outbound: {
    alignSelf: "flex-end",
    backgroundColor: "#3498db", // Outbound message color
  },
  inbound: {
    alignSelf: "flex-start",
    backgroundColor: "#ecf0f1", // Inbound message color
  },
  messageText: {
    color: "#2c3e50", // Message text color
    fontSize: 16, // Message text font size
  },
});

export default Message;
