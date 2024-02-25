import { Audio } from "expo-av";
import { morseCodeEncode } from "@/utils/morseCodeUtils";

const dotSoundObject = new Audio.Sound();
const dashSoundObject = new Audio.Sound();

let stopPlayback = false;
let soundsLoaded = false;

async function loadSounds() {
  try {
    await dotSoundObject.loadAsync(require("assets/sounds/dot.mp3"));
    await dashSoundObject.loadAsync(require("assets/sounds/dash.mp3"));
    soundsLoaded = true;
  } catch (error) {
    console.error("Error loading sounds:", error);
    throw error;
  }
}

const dotDuration = 261.224;
const dashDuration = 470.204;
const gapDuration = dotDuration;
const letterGapDuration = dashDuration;
const wordGapDuration = dotDuration * 7;

function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function playSymbol(symbol) {
  const symbolArray = symbol.split("");

  for (let i = 0; i < symbolArray.length; i++) {
    let soundObject;
    let durationMillis;

    if (stopPlayback) break;

    switch (symbolArray[i]) {
      case ".":
        soundObject = dotSoundObject;
        durationMillis = dotDuration;
        break;
      case "-":
        soundObject = dashSoundObject;
        durationMillis = dashDuration;
        break;
      default:
        break;
    }

    await soundObject.setPositionAsync(0);

    const playPromise = soundObject.playAsync();

    await playPromise;

    if (i < symbolArray.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, durationMillis));
      await sleep(gapDuration);
    }
  }
}

async function playWord(word) {
  const symbols = word.split(" ");

  for (let j = 0; j < symbols.length; j++) {
    if (stopPlayback) break;
    await playSymbol(symbols[j]);
    await sleep(letterGapDuration);
  }
}

async function playMessage(encodedMorseCode) {
  const words = encodedMorseCode.split("   ");

  for (let i = 0; i < words.length; i++) {
    if (stopPlayback) break;
    await playWord(words[i]);
    await sleep(wordGapDuration);
  }
}

export async function transmit(text, loop = 1, delay = 10000, stopCallback) {
  const morseCode = morseCodeEncode(text);

  if (!soundsLoaded) {
    await loadSounds();
  }

  stopPlayback = false;

  const callback = async () => {
    console.log("Morse code playback completed x", loop);

    if (stopPlayback) return;

    if (isFinite(loop) && loop > 1) {
      loop--;

      setTimeout(() => {
        transmit(text, loop, delay, stopCallback);
      }, delay);
    } else if (loop === "infinity") {
      await playMessage(morseCode);
      transmit(text, loop, delay, stopCallback);
    }
  };

  await playMessage(morseCode);
  callback();

  if (stopCallback) {
    stopCallback();
  }
}

export function stopTransmit() {
  stopPlayback = true;
}
