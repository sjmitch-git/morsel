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
import Mapbox from "@rnmapbox/maps";
Mapbox.setConnected(true);
Mapbox.setAccessToken(
  "pk.eyJ1Ijoic2ptaXRjaCIsImEiOiJjbHJ3NWE3MWkwazNvMmtteGM2cjIzdGQ5In0.gMlErk6m58nEM4SK9FgdqA"
);
const defaultStyle = {
  version: 8,
  name: "Land",
  sources: {
    map: {
      type: "raster",
      tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      minzoom: 1,
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#f2efea",
      },
    },
    {
      id: "map",
      type: "raster",
      source: "map",
      paint: {
        "raster-fade-duration": 100,
      },
    },
  ],
};
const HomeScreen = () => {
  console.log("Mapbox", MapboxGL);
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
      <View style={styles.map_container}>
        <Mapbox.MapView style={styles.map} styleJSON={JSON.stringify(defaultStyle)} />
      </View>
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
    height: 700,
    width: 390,
  },
  map: {
    flex: 1,
  },
});

export default HomeScreen;
