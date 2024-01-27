import { morseCodeDecode } from "@/utils/morseCode/morseCodeDecode";

describe("morseCodeDecode", () => {
  it('decodes ".... . .-.. .-.. ---" correctly', () => {
    const decodedMessage = morseCodeDecode(".... . .-.. .-.. ---");
    expect(decodedMessage).toBe("HELLO");
  });

  it('decodes ".... . .-.. .-.. ---   .-- --- .-. .-.. -.." correctly', () => {
    const decodedMessage = morseCodeDecode(".... . .-.. .-.. ---   .-- --- .-. .-.. -..");
    expect(decodedMessage).toBe("HELLO WORLD");
  });

  it('decodes ".... . .-.. .-.. ---   .-- --- .-. .-.. -.. -.-.--" correctly', () => {
    const decodedMessage = morseCodeDecode(".... . .-.. .-.. ---   .-- --- .-. .-.. -.. -.-.--");
    expect(decodedMessage).toBe("HELLO WORLD!");
  });

  it('decodes "-- . -.. .. -.-. .- .-..   . -- . .-. --. . -. -.-. -.--" correctly', () => {
    const decodedMessage = morseCodeDecode(
      "-- . -.. .. -.-. .- .-..   . -- . .-. --. . -. -.-. -.--"
    );
    expect(decodedMessage).toBe("MEDICAL EMERGENCY");
  });

  it('decodes "-.-. --- --- .-. -.. .. -. .- - . ... ---...   .-.. .- - .. - ..- -.. . ---...   ....- ----- .-.-.- --... .---- ..--- ---.. --..--   .-.. --- -. --. .. - ..- -.. . ---...   -...- --... ....- .-.-.- ----- ----- -.... -----" correctly', () => {
    const decodedMessage = morseCodeDecode(
      "-.-. --- --- .-. -.. .. -. .- - . ... ---...   .-.. .- - .. - ..- -.. . ---...   ....- ----- .-.-.- --... .---- ..--- ---.. --..--   .-.. --- -. --. .. - ..- -.. . ---...   -...- --... ....- .-.-.- ----- ----- -.... -----"
    );
    expect(decodedMessage).toBe("COORDINATES: LATITUDE: 40.7128, LONGITUDE: -74.0060");
  });

  it('decodes "SOS" correctly', () => {
    const decodedMessage = morseCodeDecode("...---...");
    expect(decodedMessage).toBe("SOS");
  });

  it('decodes "-...- ..--- .-.-.- -.... ----. ----. ..--- --... ..... ...--" correctly', () => {
    const decodedMessage = morseCodeDecode(
      "-...- ..--- .-.-.- -.... ----. ----. ..--- --... ..... ...--"
    );
    expect(decodedMessage).toBe("-2.6992753");
  });

  it('decodes "-.-. --- --- .-. -.. .. -. .- - . ... ---...   .-.. .- - .. - ..- -.. . ---...   ..... ...-- .-.-.- ....- ..... ..--- ....- ...-- ...-- ...-- --..--   .-.. --- -. --. .. - ..- -.. . ---...   -...- ..--- .-.-.- -.... ----. ----. ..--- -.... ...-- ----." correctly', () => {
    const decodedMessage = morseCodeDecode(
      "-.-. --- --- .-. -.. .. -. .- - . ... ---...   .-.. .- - .. - ..- -.. . ---...   ..... ...-- .-.-.- ....- ..... ..--- ....- ...-- ...-- ...-- --..--   .-.. --- -. --. .. - ..- -.. . ---...   -...- ..--- .-.-.- -.... ----. ----. ..--- -.... ...-- ----."
    );
    expect(decodedMessage).toBe("COORDINATES: LATITUDE: 53.4524333, LONGITUDE: -2.6992639");
  });
});
