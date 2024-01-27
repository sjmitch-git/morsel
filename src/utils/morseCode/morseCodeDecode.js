import { reversedMorseCodeDictionary } from "@/constants/morseCodeDictionary";

export function morseCodeDecode(code) {
  const words = code.split("   ");
  const decodedMessageArray = words.map((word) => {
    const symbols = word.split(" ");
    // console.log("Symbols:", symbols);
    return symbols.map((symbol) => reversedMorseCodeDictionary[symbol] || "").join("");
  });
  //  console.log("Decoded Message Array:", decodedMessageArray);
  return decodedMessageArray.join(" ");
}
