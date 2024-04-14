import React from "react";
import { View, FlatList, StyleSheet, Modal, TouchableWithoutFeedback } from "react-native";
import CloseButton from "@/components/CloseButton";
import { H3 } from "@/components/ui";
import { Constants } from "@/styles";
import { presetMessages } from "@/constants/presetMessages";
import SendPreset from "./SendPreset";

const title = "Preset Messages";

const PreSetList = ({ visible, setPresetMessage, onClose }) => {
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
      <TouchableWithoutFeedback>
        <View style={styles.modalView}>
          <CloseButton onClose={handleDialogClose} />
          <View style={styles.dialog}>
            <View style={styles.titleContainer}>
              <H3 style={styles.title}>{title}</H3>
            </View>
            <View style={[styles.listView, !visible && { display: "null" }]}>
              <FlatList
                onTouchStartCapture={() => true}
                onTouchMoveCapture={() => true}
                data={presetMessages}
                keyExtractor={(item) => item && Math.random().toString()}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <SendPreset label={item} setNewMessage={setPresetMessage} />
                  </View>
                )}
                style={styles.listContainer}
              />
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
  listView: {
    height: 200,
  },
  listContainer: {
    flex: 1,
    padding: 8,
    backgroundColor: Constants.backdropColor,
  },
  item: {
    marginBottom: 8,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 8,
  },
});

export default PreSetList;
