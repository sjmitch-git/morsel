import { morseCodeDictionary } from "@/constants/morseCodeDictionary";

export function morseCodeEncode(text) {
  return text
    .toUpperCase()
    .split(" ")
    .map((word) =>
      word === "SOS"
        ? morseCodeDictionary["SOS"]
        : word
            .split("")
            .map((char) => morseCodeDictionary[char] || morseCodeDictionary["ERROR"])
            .join(" ")
    )
    .join("   ");
}
