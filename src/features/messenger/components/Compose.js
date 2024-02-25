import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { TextArea, H2, Button, Hr } from "@/ui";
import LocationButton from "./LocationButton";
import SendPreset from "./SendPreset";
import {
  getMessages,
  saveMessages,
  formatMessage,
  transmit,
  stopTransmit,
} from "@/services/messenger.service";

const Compose = () => {
  const [message, setMessage] = useState("");
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(1);
  const [delay, setDelay] = useState(10000);

  const setNewMessage = (newMessage) => {
    setMessage((prevMessage) => (prevMessage ? prevMessage + " " + newMessage : newMessage));
  };

  const handleSend = async () => {
    setPlaying(true);
    transmit(message, loop, delay, handleStop);
    saveSendMessage();
  };

  const handleStop = () => {
    stopTransmit();
    setPlaying(false);
  };

  const saveSendMessage = async () => {
    const existingMessages = await getMessages();
    const updatedMessages = [formatMessage(message), ...existingMessages];
    saveMessages(updatedMessages);
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
        style={styles.textarea}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Loop"
        value={String(loop)}
        onChangeText={(text) => setLoop(parseInt(text, 10) || 0)}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Delay (ms)"
        value={String(delay)}
        onChangeText={(text) => setDelay(parseInt(text, 10) || 0)}
      />
      <View style={styles.buttonContainer}>
        <Button label="Send" onPress={handleSend} disabled={!message} size="lg" />
        <Button label="Stop" onPress={handleStop} disabled={!playing} size="lg" />
        <Button label="Reset" onPress={handleReset} disabled={!message} size="lg" />
      </View>
      <Hr color="#ddd" height={10} />
      <H2>Preset mesages</H2>
      <View style={styles.buttonContainer}>
        <SendPreset label="SOS" setNewMessage={setNewMessage} state="danger" />
        <SendPreset label="Medical Emergency" setNewMessage={setNewMessage} />
      </View>
      <View style={styles.buttonContainer}>
        <LocationButton setNewMessage={setNewMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    width: "100%",
    gap: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  textarea: {
    textTransform: "uppercase",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Compose;
