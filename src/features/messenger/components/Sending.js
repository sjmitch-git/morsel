import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  Text,
  ActivityIndicator,
} from "react-native";
import { H2, Progress } from "@/components/ui";
import { Constants } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useMessageContext } from "@/contexts/MessageContext";
import { morseCodeDecode } from "@/utils/morseCodeUtils";

const Sending = ({ visible, onClose, message, delay, startProgress }) => {
  const { symbols, loadingSymbols } = useMessageContext();

  const handleDialogClose = () => {
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={visible}
      onRequestClose={handleDialogClose}
    >
      <TouchableWithoutFeedback onPress={handleDialogClose}>
        <View style={styles.modalView}>
          <Pressable onPress={handleDialogClose} style={styles.closeButton}>
            <Text style={styles.closeLabel}>Stop</Text>
            <Ionicons name="close" size={Constants.iconSizeXLarge} color="white" />
          </Pressable>
          <View style={styles.dialog}>
            <View style={styles.titleContainer}>
              <H2 style={styles.title}>"{message}"</H2>
            </View>
            <View style={styles.symbolsContainer}>
              {loadingSymbols && <ActivityIndicator size="large" color={Constants.accentColor} />}
              {startProgress && <Progress duration={delay} style={{ marginVertical: 100 }} />}
              <Text style={{ color: Constants.lightColor, fontSize: 72 }}>
                {morseCodeDecode(symbols)}
              </Text>
              <Text style={{ color: Constants.lightColor, fontSize: 48 }}>{symbols}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: Constants.backdropColor,
  },
  dialog: {
    padding: 8,
    borderRadius: 2,
    width: 300,
    elevation: 24,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
  title: {
    textAlign: "center",
    fontFamily: Constants.fontMono,
    fontSize: Constants.h1FontSize,
  },
  symbolsContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "100%",
  },
  item: {
    marginBottom: 8,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 8,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  closeLabel: {
    color: Constants.lightColor,
    textTransform: "uppercase",
    fontSize: Constants.h4FontSize,
  },
});

export default Sending;
