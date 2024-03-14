import React from "react";
import { View } from "react-native";

import Torch from "@/features/torch/Torch";

const TorchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Torch />
    </View>
  );
};

export default TorchScreen;
