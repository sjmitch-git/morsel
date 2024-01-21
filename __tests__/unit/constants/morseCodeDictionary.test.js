import { morseCodeDictionary, reversedMorseCodeDictionary } from "@/constants/morseCodeDictionary";

describe("morseCodeDictionary", () => {
  test('translates "HELLO" correctly', () => {
    const translatedMessage = morseCodeDictionary["HELLO"];
    expect(translatedMessage).toBe(".... . .-.. .-.. ---");
  });
});

describe("reversedMorseCodeDictionary", () => {
  test('translates "-.-. --- --- .-. -.. .. -. .. - ..." to "COORDINATES"', () => {
    const translatedMessage = reversedMorseCodeDictionary["-.-. --- --- .-. -.. .. -. .. - ..."];
    expect(translatedMessage).toBe("COORDINATES");
  });
});
