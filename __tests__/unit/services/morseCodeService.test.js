import {
  morseCodeDictionary,
  reversedMorseCodeDictionary,
  morseCodeDecode,
  morseCodeEncode,
} from "@/services/morseCode.service";

describe("Morse Code Service", () => {
  it("encodes and decodes correctly", () => {
    const originalMessage = "HELLO WORLD";

    const encodedMessage = morseCodeEncode(originalMessage);

    const decodedMessage = morseCodeDecode(encodedMessage);

    expect(morseCodeDictionary).toBeDefined();
    expect(reversedMorseCodeDictionary).toBeDefined();

    expect(decodedMessage).toBe(originalMessage);
  });
});
