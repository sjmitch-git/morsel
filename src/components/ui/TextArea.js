import React, { useState, forwardRef } from "react";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { TextInput, Keyboard } from "react-native";
import { FormsStyles, lightTheme, darkTheme, Colors } from "@/styles";

const TextArea = forwardRef(
  ({ style, multiline = true, rows, placeholder, inputMode = "text", ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const { isDarkMode } = useDarkMode();
    const textColor = isDarkMode ? darkTheme.textColor : lightTheme.textColor;

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
      Keyboard.dismiss();
    };

    return (
      <TextInput
        style={[
          FormsStyles.input,
          style,
          isFocused && FormsStyles.inputFocus,
          { color: textColor },
        ]}
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
        placeholderTextColor={Colors.midGrey}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoCapitalize="characters"
        inputMode={inputMode}
        {...rest}
        ref={ref}
      />
    );
  }
);

export { TextArea };
