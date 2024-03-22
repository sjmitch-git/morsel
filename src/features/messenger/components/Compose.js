import React, { useState, useRef } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { TextArea, H2, Hr, Select } from "@/ui";
import { Constants } from "@/styles";
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
import { loopOptions, delayOptions } from "@/constants/transmitOptions";

const iconSize = 30;

const Compose = () => {
  const [message, setMessage] = useState("");
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(1);
  const [delay, setDelay] = useState(10000);
  const [flashState, setFlashState] = useState(false);
  const [audioSelected, setAudioSelected] = useState(true);
  const [flashSelected, setFlashSelected] = useState(false);
  const { isDarkMode } = useDarkMode();
  const textareaRef = useRef();

  const setNewMessage = (newMessage) => {
    setMessage((prevMessage) => (prevMessage ? prevMessage + " " + newMessage : newMessage));
  };

  const handleSend = async () => {
    setPlaying(true);
    transmit(message, loop, delay, handleStop, setFlashState, audioSelected);
    // saveSendMessage();
  };

  const handleStop = () => {
    stopTransmit();
    setPlaying(false);
  };

  /* const saveSendMessage = async () => {
    const existingMessages = await getMessages();
    const updatedMessages = [formatMessage(message), ...existingMessages];
    saveMessages(updatedMessages);
  }; */

  const handleReset = () => {
    setMessage("");
    textareaRef.current.focus();
  };

  const handleLoopChange = (value) => {
    setLoop(value);
  };

  const handleDelayChange = (itemValue) => {
    setDelay(itemValue);
  };

  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <TextArea
          multiline={true}
          rows={2}
          placeholder="Type your message here!"
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.textarea}
          ref={textareaRef}
        />
        {message.length > 0 && (
          <Pressable style={{ position: "absolute", top: 10, right: 14 }} onPress={handleReset}>
            <FontAwesome5
              name="times"
              size={24}
              color={isDarkMode ? Constants.lightColor : Constants.darkColor}
            />
          </Pressable>
        )}
      </View>

      <View style={styles.options}>
        <View style={styles.transmit_options}>
          {!playing && (
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.pressedButton,
                {
                  borderRadius: Constants.borderRadius,
                  backgroundColor:
                    !message || playing ? Constants.disabledColor : Constants.primaryColor,
                },
              ]}
              onPress={handleSend}
            >
              <FontAwesome5
                name="play"
                size={iconSize}
                color={!message || playing ? Constants.shimColor : Constants.lightColor}
              />
            </Pressable>
          )}
          {playing && (
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.pressedButton,
                {
                  borderRadius: Constants.borderRadius,
                  backgroundColor: playing ? Constants.primaryColor : Constants.disabledColor,
                },
              ]}
              onPress={handleStop}
            >
              <FontAwesome5
                name="stop"
                size={iconSize}
                color={playing ? Constants.lightColor : Constants.shimColor}
              />
            </Pressable>
          )}
        </View>
        <View style={styles.transmit_options}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              audioSelected ? styles.selectedButton : null,
              { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
              pressed && styles.pressedButton,
            ]}
            onPress={() => {
              setAudioSelected(true);
              setFlashSelected(false);
            }}
          >
            <FontAwesome5
              name="volume-up"
              size={iconSize}
              color={audioSelected ? "white" : "black"}
            />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              flashSelected ? styles.selectedButton : null,
              { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
              pressed && styles.pressedButton,
            ]}
            onPress={() => {
              setFlashSelected(true);
              setAudioSelected(false);
            }}
          >
            <FontAwesome5 name="bolt" size={iconSize} color={flashSelected ? "white" : "black"} />
          </Pressable>
        </View>
      </View>

      <View style={styles.options}>
        <Select
          label="Loop:"
          selectedValue={loop}
          onValueChange={handleLoopChange}
          data={loopOptions}
        />
        <Select
          label="Delay:"
          selectedValue={delay}
          onValueChange={handleDelayChange}
          data={delayOptions}
        />
      </View>

      <Hr color="#ddd" height={2} />

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
    borderStyle: "dashed",
    borderWidth: 4,
  },
  /* input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  }, */
  transmit_options: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  button: {
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  selectedButton: {
    backgroundColor: "blue",
  },
  pressedButton: {
    opacity: 0.5,
  },
});

export default Compose;
