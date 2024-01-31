import React, { useState } from "react";
import { TextInput } from "react-native";
import { globalStyles } from "@/themes";

const TextArea = ({ multiline, rows, placeholder, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <TextInput
      style={[globalStyles.input, isFocused && globalStyles.inputFocused]}
      multiline={multiline}
      rows={rows}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      autoCapitalize="characters"
      {...rest}
    />
  );
};

export { TextArea };
