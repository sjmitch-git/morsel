import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Constants } from "@/styles";

const Message = ({ text, type, timestamp, onDelete }) => {
  const messageStyle = type === "outbound" ? styles.outbound : styles.inbound;
  const messageDate = new Date(timestamp);

  const isToday = () => {
    const today = new Date();

    return (
      messageDate.getDate() === today.getDate() &&
      messageDate.getMonth() === today.getMonth() &&
      messageDate.getFullYear() === today.getFullYear()
    );
  };

  const formattedTimestamp = isToday()
    ? messageDate.toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric" })
    : messageDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "2-digit",
      });

  const deleteButtonContent = onDelete ? (
    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
      <MaterialIcons name="delete" size={24} color="#fff" />
    </TouchableOpacity>
  ) : (
    <View style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </View>
  );

  return (
    <View style={[styles.messageContainer, messageStyle]}>
      <View style={styles.textContainer}>
        <Text style={styles.messageText}>{text}</Text>
        <Text style={styles.dateText}>{formattedTimestamp}</Text>
      </View>

      {deleteButtonContent}
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
    backgroundColor: Constants.infoColorLight,
  },
  inbound: {
    alignSelf: "flex-start",
    backgroundColor: Constants.successColorLight,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
  },
  messageText: {
    color: Constants.darkColor,
    fontSize: 16, // Message text font size
    flex: 1, // Allow text to take remaining space
    textTransform: "uppercase",
  },
  dateText: {
    color: Constants.darkColor,
    fontSize: 16, // Message text font size
    textTransform: "uppercase",
  },
  deleteButton: {
    marginLeft: 8, // Add some space between text and delete button
  },
  deleteButtonText: {
    color: "#fff", // Text color
    fontSize: 16, // Font size of the text
  },
});

export default Message;
