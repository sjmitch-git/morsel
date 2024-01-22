import { reversedMorseCodeDictionary } from "@/constants/morseCodeDictionary";

export function morseCodeDecode(code) {
  const words = code.split("   ");
  const decodedMessageArray = words.map((word) => {
    const symbols = word.split(" ");
    return symbols.map((symbol) => reversedMorseCodeDictionary[symbol] || "").join("");
  });

  return decodedMessageArray.join(" ");
}
