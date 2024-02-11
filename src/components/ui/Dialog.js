import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Button } from "./Button";
import { H3 } from "./Headings";
import { P } from "./TextFormat";
import { Ionicons } from "@expo/vector-icons";

const getIconName = (state) => {
  switch (state) {
    case "success":
      return "checkmark-circle-outline";
    case "warning":
      return "alert-circle-outline";
    case "error":
      return "close-circle-outline";
    case "info":
      return "information-circle-outline";
  }
};

const Dialog = ({ title, message, visible, state = "info", onConfirm, onCancel, onClose }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const iconName = getIconName(state);
  const color = stateColors[state];

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  const handleDialogClose = () => {
    setModalVisible(false);
    onCancel?.() || onClose?.();
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={modalVisible}
      onRequestClose={handleDialogClose}
    >
      <TouchableOpacity style={styles.overlay} onPressOut={handleDialogClose}>
        <View style={styles.modalView}>
          <View style={styles.dialog}>
            <View style={styles.titleContainer}>
              <Ionicons name={iconName} size={40} color={color} />
              <H3 style={[styles.title, { color: color }]}>{title}</H3>
            </View>
            <P style={styles.message}>{message}</P>

            <View style={styles.buttons}>
              {onConfirm && <Button label="OK" state={state} onPress={onConfirm} />}
              {onCancel && <Button label="Cancel" onPress={onCancel} />}
              {!onConfirm && !onCancel && <Button label="OK" onPress={onClose} />}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const stateColors = {
  success: "green",
  warning: "orange",
  error: "red",
  info: "blue",
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  dialog: {
    backgroundColor: "#fafafa",
    padding: 16,
    borderRadius: 2,
    maxWidth: "80%",
    minWidth: 280,
    margin: 48,
    elevation: 24,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  title: {},
  message: {
    marginBottom: 32,
  },
  buttons: {
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});

export { Dialog };
