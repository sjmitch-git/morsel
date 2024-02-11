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
          onDelete={() => onDeleteMessage(item.timestamp)}
        />
      )}
      style={styles.listContainer}
      inverted
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: "orange",
    borderStyle: "dashed",
    maxHeight: 300,
    minWidth: "100%",
    overflow: "scroll",
  },
});

export default MessageList;
