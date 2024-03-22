import React from "react";
import { HeadingStyles } from "@/styles";
import { AppText } from "@/shared/Typography";

const H1 = ({ children, style }) => {
  return (
    <AppText style={[HeadingStyles.h1, style]} role="heading" aria-level="1">
      {children}
    </AppText>
  );
};

const H2 = ({ children, style }) => {
  return (
    <AppText style={[HeadingStyles.h2, style]} role="heading" aria-level="2">
      {children}
    </AppText>
  );
};

const H3 = ({ children, style }) => {
  return (
    <AppText style={[HeadingStyles.h3, style]} role="heading" aria-level="3">
      {children}
    </AppText>
  );
};

const H4 = ({ children, style }) => {
  return (
    <AppText style={[HeadingStyles.h4, style]} role="heading" aria-level="4">
      {children}
    </AppText>
  );
};

export { H1, H2, H3, H4 };
