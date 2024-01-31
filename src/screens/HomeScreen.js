import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LocationButton from "@/components/screens/HomeScreen/LocationButton";
import {
  H1,
  H2,
  P,
  Span,
  Em,
  Strong,
  Small,
  Mark,
  Del,
  Ins,
  Sub,
  Sup,
  Code,
  Pre,
  U,
  Hr,
  Br,
  TextArea,
} from "@/ui";
// import Constants from "expo-constants";
/* import MapboxGL from "@rnmapbox/maps";
MapboxGL.setAccessToken(
  "pk.eyJ1Ijoic2ptaXRjaCIsImEiOiJjbHJ3NWE3MWkwazNvMmtteGM2cjIzdGQ5In0.gMlErk6m58nEM4SK9FgdqA"
); */
const HomeScreen = () => {
  // console.log("Mapbox", MapboxGL);
  return (
    <View style={styles.container}>
      <H1>
        Home Screen! <Small>some small</Small>
      </H1>
      <H2>
        Home Screen! <Small>some small text</Small>
      </H2>
      <P>
        This is a <Strong>strong</Strong> and <Em>emphasized</Em>{" "}
        <Strong style={{ color: "red" }}>paragraph</Strong>.
      </P>
      <P>
        This is a <Strong>strong</Strong> and <Em>emphasized</Em>{" "}
        <Span style={{ color: "red" }}>paragraph</Span>.
      </P>
      <Hr style="dashed" />
      <P>
        This is a <Strong>strong</Strong> and <Em>emphasized</Em> text. Also, a <Small>small</Small>{" "}
        text. Here's a <Mark>marked</Mark> section. Additionally, there is a <Del>deleted</Del> and
        an <Ins>inserted</Ins> text. <Br />
        You can use <Sub>subscript</Sub> and <Sup>superscript</Sup> text. Inline <Code>code</Code>{" "}
        is supported as well. For code blocks:
      </P>
      <Pre>
        {`function add(a, b) {
  return a + b;
}
`}
      </Pre>
      <P>
        Lastly, you can underline text using <U>underline</U>.
      </P>
      <TextArea multiline rows={5} placeholder="placeholder text" />
      <LocationButton />
      <P>
        My Bonnie lies over the ocean.
        <Br />
        My Bonnie lies over the sea.
        <Br />
        My Bonnie lies over the ocean.
        <Br />
        Oh, bring back my Bonnie to me.
      </P>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  map_container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
