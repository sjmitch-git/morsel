import React, { useRef } from "react";
import { View, StyleSheet, Platform, Text, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { FormsStyles, lightTheme, darkTheme, Constants } from "@/styles";

const PickerButton = ({ label, selectedValue, onValueChange, data }) => {
  const { isDarkMode } = useDarkMode();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={open} style={styles.pickerContainer}>
        <Text
          style={[styles.label, { color: isDarkMode ? darkTheme.textColor : lightTheme.textColor }]}
        >
          {label}
        </Text>
      </Pressable>

      <Picker
        ref={pickerRef}
        selectedValue={selectedValue}
        onValueChange={(value) => {
          onValueChange(value);
        }}
        prompt={`${label}: ${
          data.find((option) => option.value === selectedValue)?.label || selectedValue
        }`}
        itemStyle={{ fontSize: 24 }}
        style={[
          FormsStyles.input,
          styles.picker,
          {
            backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor,
            color: isDarkMode ? darkTheme.textColor : lightTheme.textColor,
          },
        ]}
      >
        {data.map((option) => (
          <Picker.Item key={option.value} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  pickerContainer: {
    borderColor: Constants.borderColor,
    borderWidth: Platform.OS === "web" ? 0 : Constants.borderWidth,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: Constants.borderRadius,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
  },
  picker: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    opacity: 0,
    height: 0,
  },
});

export { PickerButton };
