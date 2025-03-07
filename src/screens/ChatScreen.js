import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { H1, Dialog, Button } from "@/ui";
import MessageList from "@/features/messenger/components/MessageList";
import { getMessages, clearMessage, clearMessages } from "@/services/messenger.service";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({
    title: "",
    message: "",
    state: "",
    onConfirm: () => {},
    onCancel: () => {},
    onClose: () => {},
  });

  useFocusEffect(
    React.useCallback(() => {
      fetchMessages();
    }, [])
  );

  const fetchMessages = async () => {
    try {
      const storedMessages = await getMessages();
      setMessages(storedMessages);
    } catch (error) {
      setDialogContent({
        title: "Oops!",
        message: "Something went wrong. Failed to fetch messages.",
        state: "error",
        onClose: () => {
          setShowDialog(false);
        },
      });
      setShowDialog(true);
    }
  };

  const handleDeleteMessage = (timestamp) => {
    setDialogContent({
      title: "Warning",
      message: "Delete this message?",
      state: "warning",
      onConfirm: () => {
        handleConfirmDelete(timestamp);
      },
      onCancel: () => {
        handleCancelDelete();
      },
    });
    setShowDialog(true);
  };

  const handleConfirmDelete = async (timestamp) => {
    if (timestamp) {
      await clearMessage(timestamp);
      fetchMessages();
    }
    setShowDialog(false);
  };

  const handleCancelDelete = () => {
    setShowDialog(false);
  };

  const handleClearAllMessages = () => {
    setDialogContent({
      title: "Warning",
      message: "Clear all messages?",
      state: "warning",
      onConfirm: () => {
        handleConfirmClearAllMessages();
      },
      onCancel: () => {
        handleCancelClearAllMessages();
      },
    });
    setShowDialog(true);
  };

  const handleConfirmClearAllMessages = async () => {
    await clearMessages();
    fetchMessages();
    setShowDialog(false);
  };

  const handleCancelClearAllMessages = () => {
    setShowDialog(false);
  };

  return (
    <View style={styles.container}>
      <H1>Chat Screen!</H1>
      {messages.length === 0 ? (
        <View>
          <Text>No messages available.</Text>
        </View>
      ) : (
        <>
          <MessageList messages={messages} onDeleteMessage={handleDeleteMessage} />
          <Button
            title="Clear All Messages"
            onPress={handleClearAllMessages}
            disabled={messages.length === 0}
          />
        </>
      )}
      <Dialog
        title={dialogContent.title}
        message={dialogContent.message}
        state={dialogContent.state}
        visible={showDialog}
        onConfirm={dialogContent.onConfirm}
        onCancel={dialogContent.onCancel}
        onClose={dialogContent.onClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
  },
});

export default ChatScreen;
