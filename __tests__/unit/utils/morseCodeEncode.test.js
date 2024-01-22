import { morseCodeEncode } from "@/utils/morseCode/morseCodeEncode";

describe("morseCodeEncode", () => {
  it('encodes "Hello" correctly', () => {
    const encodedMessage = morseCodeEncode("Hello");
    expect(encodedMessage).toBe(".... . .-.. .-.. ---");
  });

  it('encodes "Hello, World!" correctly', () => {
    const encodedMessage = morseCodeEncode("Hello, World!");
    expect(encodedMessage).toBe(".... . .-.. .-.. --- --..--   .-- --- .-. .-.. -.. -.-.--");
  });

  it('encodes "Test 123" correctly', () => {
    const encodedMessage = morseCodeEncode("Test 123");
    expect(encodedMessage).toBe("- . ... -   .---- ..--- ...--");
  });

  it('encodes "40.7128" correctly', () => {
    const encodedMessage = morseCodeEncode("40.7128");
    expect(encodedMessage).toBe("....- ----- .-.-.- --... .---- ..--- ---..");
  });

  it('encodes "COORDINATES: latitude: 40.7128, longitude: -74.0060" correctly', () => {
    const encodedMessage = morseCodeEncode("COORDINATES: latitude: 40.7128, longitude: -74.0060");
    expect(encodedMessage).toBe(
      "-.-. --- --- .-. -.. .. -. .- - . ... ---...   .-.. .- - .. - ..- -.. . ---...   ....- ----- .-.-.- --... .---- ..--- ---.. --..--   .-.. --- -. --. .. - ..- -.. . ---...   -...- --... ....- .-.-.- ----- ----- -.... -----"
    );
  });

  it('encodes "MEDICAL EMERGENCY" correctly', () => {
    const encodedMessage = morseCodeEncode("MEDICAL EMERGENCY");
    expect(encodedMessage).toBe("-- . -.. .. -.-. .- .-..   . -- . .-. --. . -. -.-. -.--");
  });

  it('encodes "SOS" correctly', () => {
    const encodedMessage = morseCodeEncode("SOS");
    expect(encodedMessage).toBe("...---...");
  });
});
