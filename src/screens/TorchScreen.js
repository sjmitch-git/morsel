import React from "react";
import { View } from "react-native";
import { H1 } from "@/ui";

import Torch from "@/features/torch/Torch";

const TorchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "start", alignItems: "center" }}>
      <H1>Torch</H1>
      <Torch />
    </View>
  );
};

export default TorchScreen;
