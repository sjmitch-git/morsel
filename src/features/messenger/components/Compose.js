import React, { useState } from "react";
import { View, Button, StyleSheet, Alert } from "react-native";
import { TextArea } from "@/ui";

const Compose = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Implement your send logic here
    Alert.alert("Message Sent", message);
  };

  const handleReset = () => {
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <TextArea
        multiline={true}
        placeholder="Type your message..."
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={styles.textArea}
      />
      <View style={styles.buttonContainer}>
        <Button title="Send" onPress={handleSend} />
        <Button title="Reset" onPress={handleReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Compose;
