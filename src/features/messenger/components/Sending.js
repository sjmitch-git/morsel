import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Text,
  ActivityIndicator,
} from "react-native";
import CloseButton from "@/components/CloseButton";
import { H2, Progress } from "@/components/ui";
import { Constants } from "@/styles";
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
          <CloseButton onClose={handleDialogClose} label={"Stop"} />
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
});

export default Sending;
