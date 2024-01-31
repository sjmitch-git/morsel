import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "@/themes";

const P = ({
  style,
  children,
  fontSize = globalStyles.baseText.fontSize,
  textAlign = globalStyles.baseText.textAlign,
  marginBottom = 10,
  lineHeight = globalStyles.baseText.lineHeight,
}) => {
  const styles = StyleSheet.create({
    paragraph: {
      fontSize: fontSize,
      textAlign: textAlign,
      marginBottom: marginBottom,
      lineHeight: lineHeight,
    },
  });
  return <Text style={[styles.paragraph, style]}>{children}</Text>;
};

const Span = ({ style, children }) => {
  return <Text style={[style]}>{children}</Text>;
};

const Em = ({ style, children }) => {
  const styles = StyleSheet.create({
    emphasis: {
      fontStyle: "italic",
    },
  });
  return <Text style={[styles.emphasis, style]}>{children}</Text>;
};

const Strong = ({ style, children }) => {
  const styles = StyleSheet.create({
    strong: {
      fontWeight: "bold",
    },
  });
  return <Text style={[styles.strong, style]}>{children}</Text>;
};

const Small = ({ style, children }) => {
  const styles = StyleSheet.create({
    small: {
      fontSize: 16,
    },
  });
  return <Text style={[styles.small, style]}>{children}</Text>;
};

const Mark = ({ style, children, bg = "yellow" }) => {
  const styles = StyleSheet.create({
    mark: {
      backgroundColor: bg,
    },
  });
  return <Text style={[styles.mark, style]}>{children}</Text>;
};

const Del = ({ style, children }) => {
  const styles = StyleSheet.create({
    deleted: {
      textDecorationLine: "line-through",
    },
  });
  return <Text style={[styles.deleted, style]}>{children}</Text>;
};

const Ins = ({ style, children }) => {
  const styles = StyleSheet.create({
    inserted: {
      textDecorationLine: "underline",
    },
  });
  return <Text style={[styles.inserted, style]}>{children}</Text>;
};

const Sub = ({ style, children }) => {
  const styles = StyleSheet.create({
    subscript: {
      bottom: -2,
      fontSize: 16,
    },
  });
  return <Text style={[styles.subscript, style]}>{children}</Text>;
};

const Sup = ({ style, children }) => {
  const styles = StyleSheet.create({
    superscript: {
      top: -2,
      fontSize: 16,
    },
  });
  return <Text style={[styles.superscript, style]}>{children}</Text>;
};

const Code = ({ style, children, bg = "#ccc", color = "#000" }) => {
  const styles = StyleSheet.create({
    code: {
      fontFamily: "monospace",
      color: color,
      backgroundColor: bg,
    },
  });
  return <Text style={[styles.code, style]}>{children}</Text>;
};

const Pre = ({
  style,
  children,
  bg = "#ccc",
  color = "#000",
  padding = 10,
  borderRadius = 5,
  marginBottom = 10,
}) => {
  const styles = StyleSheet.create({
    pre: {
      fontFamily: "monospace",
      color: color,
      backgroundColor: bg,
      padding: padding,
      borderRadius: borderRadius,
      marginBottom: marginBottom,
    },
  });
  return <Text style={[styles.pre, style]}>{children}</Text>;
};

const U = ({ style, children }) => {
  const styles = StyleSheet.create({
    underline: {
      textDecorationLine: "underline",
    },
  });
  return <Text style={[styles.underline, style]}>{children}</Text>;
};

const Br = () => {
  return <Text>{"\n"}</Text>;
};

const Hr = ({ color = "#000000", height = 1, marginVertical = 10, style = "solid" }) => {
  const styles = StyleSheet.create({
    horizontalRule: {
      borderBottomColor: color,
      borderBottomWidth: height,
      borderBottomStyle: style,
      marginVertical: marginVertical,
      width: "100%",
    },
  });

  return <View style={styles.horizontalRule} />;
};

export { P, Span, Em, Strong, Small, Mark, Del, Ins, Sub, Sup, Code, Pre, U, Br, Hr };
