import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { FontAwesome5 } from "@expo/vector-icons";
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
import Flasher from "@/features/torch/Flasher";

const audioIcon = <FontAwesome5 name="volume-up" size={24} color="black" />;
const flashIcon = <FontAwesome5 name="bolt" size={24} color="black" />;

const Compose = () => {
  const [message, setMessage] = useState("");
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(1);
  const [delay, setDelay] = useState(10000);
  const [flashState, setFlashState] = useState(false);
  const [audioSelected, setAudioSelected] = useState(true);
  const [flashSelected, setFlashSelected] = useState(false);

  const setNewMessage = (newMessage) => {
    setMessage((prevMessage) => (prevMessage ? prevMessage + " " + newMessage : newMessage));
  };

  const handleSend = async () => {
    setPlaying(true);
    transmit(message, loop, delay, handleStop, setFlashState, audioSelected);
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

  const loopOptions = [
    { label: "1", value: 1 },
    { label: "3", value: 3 },
    { label: "6", value: 6 },
    { label: "12", value: 12 },
    { label: "Infinity", value: -1 },
  ];

  const delayOptions = [
    { label: "10 secs", value: 10000 },
    { label: "30 secs", value: 30000 },
    { label: "1 min", value: 60000 },
    { label: "2 mins", value: 120000 },
    { label: "3 mins", value: 180000 },
    { label: "5 mins", value: 300000 },
  ];

  const transmitOptions = [
    { label: "Audio", value: 0 },
    { label: "Flash", value: 1 },
  ];

  const handleLoopChange = (value) => {
    setLoop(value);
  };

  const handleDelayChange = (itemValue) => {
    setDelay(itemValue);
  };

  const handleTransmitOptionChange = (itemValue) => {
    switch (itemValue) {
      case 0:
        setAudioSelected(true);
        setFlashSelected(false);
        break;
      case 1:
        setAudioSelected(false);
        setFlashSelected(true);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TextArea
        multiline={true}
        placeholder="Type your message"
        value={message}
        onChangeText={(text) => setMessage(text)}
        style={styles.textarea}
      />

      <View style={styles.buttonContainer}>
        <Button label="Send" onPress={handleSend} disabled={!message || playing} size="lg" />
        <Button label="Stop" onPress={handleStop} disabled={!playing} size="lg" />
        <Button label="Reset" onPress={handleReset} disabled={!message} size="lg" />
      </View>

      <Hr color="#ddd" height={10} />

      <View style={styles.options}>
        <View style={styles.pickerContainer}>
          <Text>Send Options test: {audioSelected}</Text>
          <View style={styles.options}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                audioSelected ? styles.selectedButton : null, // Apply selectedButton style if audioSelected is true
                pressed && styles.pressedButton,
              ]}
              onPress={() => {
                setAudioSelected(true);
                setFlashSelected(false); // Deselect flash option
              }}
            >
              <FontAwesome5 name="volume-up" size={40} color={audioSelected ? "white" : "black"} />
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                flashSelected ? styles.selectedButton : null, // Apply selectedButton style if flashSelected is true
                pressed && styles.pressedButton,
              ]}
              onPress={() => {
                setFlashSelected(true);
                setAudioSelected(false); // Deselect audio option
              }}
            >
              <FontAwesome5 name="bolt" size={40} color={flashSelected ? "white" : "black"} />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.options}>
        <View style={styles.pickerContainer}>
          <Text>Select Loop:</Text>
          <Picker selectedValue={loop} onValueChange={handleLoopChange} style={styles.picker}>
            {loopOptions.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Text>Select Delay:</Text>
          <Picker selectedValue={delay} onValueChange={handleDelayChange} style={styles.picker}>
            {delayOptions.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
        </View>
      </View>

      <H2>Preset mesages</H2>
      <View style={styles.buttonContainer}>
        <SendPreset label="SOS" setNewMessage={setNewMessage} state="danger" />
        <SendPreset label="Medical Emergency" setNewMessage={setNewMessage} />
      </View>
      <View style={styles.buttonContainer}>
        <LocationButton setNewMessage={setNewMessage} />
      </View>
      {flashSelected && <Flasher torchOn={flashState} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    width: "100%",
    gap: 16,
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  pickerContainer: {
    flex: 1,
  },
  picker: {
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
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
  button: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "gray",
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: "red",
  },
  pressedButton: {
    opacity: 0.5,
  },
});

export default Compose;
