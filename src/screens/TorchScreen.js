import React from "react";
import { View } from "react-native";
import { H1 } from "@/ui";

import Torch from "@/features/torch/Torch";

const TorchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <H1 style={{ marginBottom: 60 }}>Torch</H1>
      <Torch />
    </View>
  );
};

export default TorchScreen;
