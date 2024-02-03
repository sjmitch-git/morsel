// features/messenger/components/MessageList.js
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Message from "./Message";

const MessageList = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.timestamp.toString()}
      renderItem={({ item }) => <Message text={item.text} type={item.type} />}
      contentContainerStyle={styles.listContainer}
      inverted // To display the latest messages at the bottom
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
});

export default MessageList;
