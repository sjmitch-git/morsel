import React from "react";
import { Text } from "react-native";
import { HeadingStyles } from "@/styles";

const H1 = ({ children, style }) => {
  return (
    <Text style={[HeadingStyles.h1, style]} role="heading" aria-level="1">
      {children}
    </Text>
  );
};

const H2 = ({ children, style }) => {
  return (
    <Text style={[HeadingStyles.h2, style]} role="heading" aria-level="2">
      {children}
    </Text>
  );
};

const H3 = ({ children, style }) => {
  return (
    <Text style={[HeadingStyles.h3, style]} role="heading" aria-level="3">
      {children}
    </Text>
  );
};

const H4 = ({ children, style }) => {
  return (
    <Text style={[HeadingStyles.h4, style]} role="heading" aria-level="4">
      {children}
    </Text>
  );
};

export { H1, H2, H3, H4 };
