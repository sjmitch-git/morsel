import { Audio } from "expo-av";
import { morseCodeEncode } from "@/utils/morseCodeUtils";

const IntervalMillis = 1000;

const dotSoundObject = new Audio.Sound();

const dashSoundObject = new Audio.Sound();

const dotDuration = 261;
const dashDuration = 470;
const gapDuration = dotDuration * 1.25;
const letterGapDuration = dashDuration * 1.25;
const wordGapDuration = gapDuration * 7;
const durationModifier = 2;

const flashDotDuration = dotDuration * durationModifier;
const flashDashDuration = dashDuration * durationModifier;
const flashGapDuration = gapDuration * durationModifier;
const flashLetterGapDuration = letterGapDuration * durationModifier;
const flashWordGapDuration = flashGapDuration * 7;

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

function sleep(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function playSymbol(symbol, setFlashState, audioSelected) {
  const symbolArray = symbol.split("");

  for (let i = 0; i < symbolArray.length; i++) {
    let soundObject;
    let durationMillis;

    if (stopPlayback) break;

    switch (symbolArray[i]) {
      case ".":
        if (audioSelected) {
          soundObject = dotSoundObject;
          durationMillis = dotDuration;
        } else {
          durationMillis = flashDotDuration;
        }
        break;
      case "-":
        if (audioSelected) {
          soundObject = dashSoundObject;
          durationMillis = flashDashDuration;
        } else {
          durationMillis = flashDashDuration;
        }
        break;
      default:
        break;
    }

    if (audioSelected) {
      /*  await soundObject.setPositionAsync(0);
      const playPromise = soundObject.playAsync();
      await Promise.all([playPromise, sleep(durationMillis)]); */

      /*  const status = await soundObject.getStatusAsync();
      console.log("status", status);
      if (status.isPlaying) {
        await soundObject.stopAsync();
      } */

      /* await soundObject.setPositionAsync(0);
      const playPromise = soundObject.playAsync();

      await playPromise; */

      await soundObject.setPositionAsync(0);

      await new Promise((resolve) => {
        soundObject.playAsync();
        setTimeout(() => {
          resolve();
        }, durationMillis);
      });
    } else {
      await new Promise((resolve) => {
        setFlashState(true);
        setTimeout(() => {
          setFlashState(false);
          resolve();
        }, durationMillis);
      });
    }

    if (i < symbolArray.length - 1) {
      if (audioSelected) {
        await sleep(gapDuration);
      } else await sleep(flashGapDuration);
    }
  }
}

async function playWord(word, setFlashState, audioSelected) {
  const symbols = word.split(" ");

  for (let j = 0; j < symbols.length; j++) {
    if (stopPlayback) break;
    await playSymbol(symbols[j], setFlashState, audioSelected);
    if (j < symbols.length - 1) {
      if (audioSelected) {
        await sleep(letterGapDuration);
      } else await sleep(flashLetterGapDuration);
    }
  }
}

async function playMessage(encodedMorseCode, setFlashState, audioSelected) {
  const words = encodedMorseCode.split("   ");
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  for (let i = 0; i < words.length; i++) {
    if (stopPlayback) break;
    await playWord(words[i], setFlashState, audioSelected);
    if (i < words.length - 1) {
      if (audioSelected) {
        await sleep(wordGapDuration);
      } else await sleep(flashWordGapDuration);
    }
  }
}

export async function transmit(
  text,
  loop = 1,
  delay = 10000,
  stopCallback,
  setFlashState,
  audioSelected
) {
  const morseCode = morseCodeEncode(text);

  if (!soundsLoaded && audioSelected) {
    try {
      await loadSounds();
    } catch (error) {
      console.error("Error loading sounds:", error);
      return;
    }
  }

  stopPlayback = false;

  const callback = async () => {
    if (stopPlayback) return;

    if (isFinite(loop) && loop > 1) {
      loop--;

      setTimeout(() => {
        transmit(text, loop, delay, stopCallback, setFlashState, audioSelected);
      }, delay);
    } else if (loop === -1) {
      try {
        await playMessage(morseCode, setFlashState, audioSelected);
        if (!stopPlayback) {
          transmit(text, loop, delay, stopCallback, setFlashState, audioSelected);
        }
      } catch (error) {
        console.error("Error during playMessage:", error);
      }
    } else if (loop === 1) {
      stopCallback();
    }
  };

  try {
    await playMessage(morseCode, setFlashState, audioSelected);
    callback();
  } catch (error) {
    console.error("Error during initial playMessage:", error);
  }
}

export function stopTransmit() {
  stopPlayback = true;
}
