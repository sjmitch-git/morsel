import { morseCodeEncode } from "@/utils/morseCodeUtils";

export function formatMessage(text, type = "outbound") {
  return {
    code: morseCodeEncode(text),
    text: text,
    timestamp: Date.now(),
    type: type,
  };
}
