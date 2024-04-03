import React, { useState, useRef } from "react";
import { View, StyleSheet, Pressable, Animated, Platform } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { TextArea, H3, Hr, Select, PickerButton } from "@/ui";
import { Constants } from "@/styles";
import LocationButton from "./LocationButton";
import SendPreset from "./SendPreset";
import PreSetList from "./PreSetList";
import {
  getMessages,
  saveMessages,
  formatMessage,
  transmit,
  stopTransmit,
} from "@/services/messenger.service";
import Flasher from "@/features/torch/Flasher";
import { loopOptions, delayOptions } from "@/constants/transmitOptions";

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

  // bottom drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setNewMessage = (newMessage) => {
    setMessage((prevMessage) => (prevMessage ? prevMessage + " " + newMessage : newMessage));
  };

  const setPresetMessage = (newMessage) => {
    setNewMessage(newMessage);
    setDrawerOpen(false);
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

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeModal = () => {
    setDrawerOpen(false);
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
              size={Constants.iconSizeSmall}
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
                size={Constants.iconSize}
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
                size={Constants.iconSize}
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
              {
                borderTopLeftRadius: Constants.borderRadius,
                borderBottomLeftRadius: Constants.borderRadius,
              },
              pressed && styles.pressedButton,
            ]}
            onPress={() => {
              setAudioSelected(true);
              setFlashSelected(false);
            }}
          >
            <FontAwesome5
              name="volume-up"
              size={Constants.iconSize}
              color={audioSelected ? "white" : "black"}
            />
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              flashSelected ? styles.selectedButton : null,
              {
                borderTopRightRadius: Constants.borderRadius,
                borderBottomRightRadius: Constants.borderRadius,
              },
              pressed && styles.pressedButton,
            ]}
            onPress={() => {
              setFlashSelected(true);
              setAudioSelected(false);
            }}
          >
            <FontAwesome5
              name="bolt"
              size={Constants.iconSize}
              color={flashSelected ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>

      {Platform.OS === "web" ? (
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
      ) : (
        <View style={styles.options}>
          <PickerButton
            label="Loop"
            selectedValue={loop}
            onValueChange={handleLoopChange}
            data={loopOptions}
          />
          <PickerButton
            label="Delay"
            selectedValue={delay}
            onValueChange={handleDelayChange}
            data={delayOptions}
          />
        </View>
      )}

      <Hr color={Constants.midColor} />

      <View style={styles.options}>
        <SendPreset label="SOS" setNewMessage={setNewMessage} state="danger" />
        <LocationButton setNewMessage={setNewMessage} />
      </View>

      <View style={styles.presetButton}>
        <Pressable
          style={({ pressed }) => [
            pressed && styles.pressedButton,
            {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 12,
            },
          ]}
          onPress={handleDrawerToggle}
        >
          <H3 style={{ marginBottom: 0, flex: 1, color: Constants.darkColor }}>Preset mesages</H3>
        </Pressable>
      </View>

      <PreSetList visible={drawerOpen} setPresetMessage={setPresetMessage} onClose={closeModal} />

      {flashSelected && <Flasher torchOn={flashState} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    width: "100%",
    gap: 16,
    position: "static",
  },
  options: {
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
    backgroundColor: Constants.secondaryColor,
  },
  pressedButton: {
    opacity: 0.5,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: -16,
    right: -16,
    backgroundColor: Constants.midColor,
  },
  presetButton: {
    position: "absolute",
    bottom: Platform.OS === "web" ? -146 : -70,
    left: -16,
    right: -16,
    backgroundColor: Constants.primaryColorLight,
  },
  drawer: {
    // backgroundColor: Constants.primaryColor,
  },
  drawerContent: {
    backgroundColor: Constants.shimLightColor,
    /* height: 200,
    overflow: "scroll", */
    paddingBottom: 57,
  },
  /*  scrollView: {
    backgroundColor: Constants.shimColor,
    flex: 1,
    padding: 16,
    height: "100",
    overflow: "scroll",
  }, */
  listContainer: {
    /* padding: 16,
    paddingBottom: 0, */
    // maxHeight: 200,
    //minWidth: "100%",
    // marginBottom: 80,
    /* borderWidth: 1,
    borderColor: "orange",
    borderStyle: "dashed", */
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    maxHeight: 200,
  },
});

export default Compose;
