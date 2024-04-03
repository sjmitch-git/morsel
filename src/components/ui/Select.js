import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet, Platform } from "react-native";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { Label } from "@/ui/TextFormat";
import { FormsStyles, lightTheme, darkTheme, Constants } from "@/styles";

const Select = ({ label, selectedValue, onValueChange, data }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <View style={styles.wrapper}>
      <Label>{label}</Label>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          prompt={`${label} ${
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
    paddingBottom: Platform.OS === "web" ? 0 : 4,
  },
  picker: {
    height: 50,
  },
});

export { Select };
