import React from "react";
import { Button } from "@/ui";

const SendPreset = ({ label, state, setNewMessage, size = "md", style }) => {
  const handlePress = () => {
    setNewMessage(label);
  };

  return <Button onPress={handlePress} label={label} state={state} style={style} size={size} />;
};

export default SendPreset;
