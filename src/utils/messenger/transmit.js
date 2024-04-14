import { Audio } from "expo-av";
import { morseCodeEncode } from "@/utils/morseCodeUtils";
import {
  dotDuration,
  dashDuration,
  gapDuration,
  letterGapDuration,
  wordGapDuration,
  flashDotDuration,
  flashDashDuration,
  flashGapDuration,
  flashLetterGapDuration,
  flashWordGapDuration,
} from "@/constants/transmitOptions";

const dotSoundObject = new Audio.Sound();
const dashSoundObject = new Audio.Sound();

/* const durationModifier = 1;
const dotDuration = 261;
const dashDuration = 470;
const gapDuration = dotDuration * durationModifier;
const letterGapDuration = dashDuration * durationModifier;
const wordGapDuration = gapDuration * 7; */

/* const durationFlashModifier = 2;
const flashDotDuration = dotDuration * durationFlashModifier;
const flashDashDuration = dashDuration * durationFlashModifier;
const flashGapDuration = gapDuration * durationFlashModifier;
const flashLetterGapDuration = letterGapDuration * durationFlashModifier;
const flashWordGapDuration = flashGapDuration * 7; */

let stopPlayback = false;
let soundsLoaded = false;
let firstPlay = true;

let delayTimeout;
let sleepTimeout;

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
  return new Promise((resolve) => {
    sleepTimeout = setTimeout(resolve, duration);
  });
}

async function playSymbol(symbol, setFlashState, audioSelected, setSymbols) {
  setSymbols(symbol);
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
          durationMillis = dashDuration;
        } else {
          durationMillis = flashDashDuration;
        }
        break;
      default:
        break;
    }

    if (audioSelected) {
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

async function playWord(word, setFlashState, audioSelected, setSymbols) {
  const symbols = word.split(" ");

  for (let j = 0; j < symbols.length; j++) {
    if (stopPlayback) break;
    await playSymbol(symbols[j], setFlashState, audioSelected, setSymbols);
    if (j < symbols.length - 1) {
      if (audioSelected) {
        setSymbols("");
        await sleep(letterGapDuration);
      } else {
        setSymbols("");
        await sleep(flashLetterGapDuration);
      }
    }
  }
}

async function playMessage(
  encodedMorseCode,
  setFlashState,
  audioSelected,
  setSymbols,
  setLoadingSymbols
) {
  const words = encodedMorseCode.split("   ");

  // setLoadingSymbols(true);
  /* await new Promise((resolve) => {
    setTimeout(
      () => {
        setLoadingSymbols(false);
        resolve();
      },
      firstPlay ? 8000 : 800
    );
  }); */

  for (let i = 0; i < words.length; i++) {
    if (stopPlayback) break;
    await playWord(words[i], setFlashState, audioSelected, setSymbols);
    if (i < words.length - 1) {
      if (audioSelected) {
        setSymbols("");
        await sleep(wordGapDuration);
      } else {
        setSymbols("");
        await sleep(flashWordGapDuration);
      }
    }
  }
}

export async function transmit(
  text,
  loop = 1,
  delay = 10000,
  stopCallback,
  setFlashState,
  audioSelected,
  setSymbols,
  setLoadingSymbols,
  setProgressStart
) {
  setLoadingSymbols(true);

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
    firstPlay = false;

    if (stopPlayback) {
      return;
    }

    if (loop > 1) {
      loop--;
    }
    setProgressStart(true);
    setSymbols("");
    delayTimeout = setTimeout(() => {
      transmit(
        text,
        loop,
        delay,
        stopCallback,
        setFlashState,
        audioSelected,
        setSymbols,
        setLoadingSymbols,
        setProgressStart
      );
      setProgressStart(false);
    }, delay);
  };

  try {
    setLoadingSymbols(false);
    await playMessage(morseCode, setFlashState, audioSelected, setSymbols, setLoadingSymbols);
    if (Number(loop) === 1) {
      stopCallback();
      return;
    } else callback();
  } catch (error) {
    console.error("Error during initial playMessage:", error);
  }
}

export function stopTransmit() {
  stopPlayback = true;
  clearTimeout(delayTimeout);
  clearTimeout(sleepTimeout);
}
