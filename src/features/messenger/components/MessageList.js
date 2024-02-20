import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Message from "./Message";

const MessageList = ({ messages, onDeleteMessage }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) =>
        item && item.timestamp ? item.timestamp.toString() : Math.random().toString()
      }
      renderItem={({ item }) => (
        <Message
          text={item.text}
          type={item.type}
          timestamp={item.timestamp}
          onDelete={() => onDeleteMessage(item.timestamp)}
        />
      )}
      style={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: "orange",
    borderStyle: "dashed",
    maxHeight: 300,
    minWidth: "100%",
    marginBottom: 36,
  },
});

export default MessageList;
