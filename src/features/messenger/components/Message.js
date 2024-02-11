import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Message = ({ text, type, onDelete }) => {
  const messageStyle = type === "outbound" ? styles.outbound : styles.inbound;

  return (
    <View style={[styles.messageContainer, messageStyle]}>
      <Text style={styles.messageText}>{text}</Text>
      {onDelete && (
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <MaterialIcons name="delete" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: "80%", // Adjust based on your layout
    flexDirection: "row", // Add flexDirection to align delete button
    alignItems: "center", // Align items in a row
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
    flex: 1, // Allow text to take remaining space
  },
  deleteButton: {
    marginLeft: 8, // Add some space between text and delete button
  },
});

export default Message;
