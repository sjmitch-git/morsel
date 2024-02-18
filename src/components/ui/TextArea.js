import React, { useState } from "react";
import { TextInput } from "react-native";
import { globalStyles } from "@/themes";
import { FormsStyles } from "@/styles";

const TextArea = ({ multiline = true, rows, placeholder, inputMode = "text", ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      style={[FormsStyles.input, isFocused && globalStyles.inputFocused]}
      multiline={multiline}
      rows={rows}
      placeholder={placeholder}
      onFocus={handleFocus}
      onBlur={handleBlur}
      autoCapitalize="characters"
      inputMode={inputMode}
      {...rest}
    />
  );
};

export { TextArea };
