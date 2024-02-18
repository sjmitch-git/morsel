import { morseCodeEncode } from "@/utils/morseCodeUtils";
console.log("playMorseCode");
function playMorseCode(encodedMorseCode, callback) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) {
    console.error("AudioContext not supported");
    return;
  }

  const audioContext = new AudioContext();
  const duratioUnit = 100;
  const modifier = 2;
  const dotDuration = duratioUnit * modifier;
  const dashDuration = dotDuration * 3;
  const gapDuration = dotDuration;
  const letterGapDuration = dashDuration;
  const wordGapDuration = dotDuration * 7;

  function sleep(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  async function playSymbol(symbol) {
    const symbolArray = symbol.split("");

    for (let i = 0; i < symbolArray.length; i++) {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";

      switch (symbolArray[i]) {
        case ".":
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          break;
        case "-":
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          break;
        default:
          break;
      }

      oscillator.connect(audioContext.destination);
      oscillator.start(audioContext.currentTime);

      const duration = symbolArray[i] === "." ? dotDuration : dashDuration;

      await sleep(duration);

      oscillator.stop(audioContext.currentTime + 0.1);
      await sleep(gapDuration);
    }
  }

  async function playWord(word) {
    const symbols = word.split(" ");
    for (let j = 0; j < symbols.length; j++) {
      await playSymbol(symbols[j]);

      if (j < symbols.length - 1) {
        await sleep(gapDuration);
      }
    }
  }

  async function playMessage() {
    const words = encodedMorseCode.split("   ");

    for (let i = 0; i < words.length; i++) {
      await playWord(words[i]);

      if (i < words.length - 1) {
        await sleep(letterGapDuration);
      }
    }

    await sleep(wordGapDuration);
  }

  playMessage()
    .then(() => {
      audioContext.close().then(() => {
        console.log("Audio context closed");
        if (callback) {
          callback();
        }
      });
    })
    .catch((error) => console.error(error));
}

export function sendMessage(text, loop, delay) {
  const morseCode = morseCodeEncode(text);
  let stopPlayback = false;

  const callback = () => {
    console.log("Morse code playback completed", loop);

    if (stopPlayback) {
      // Do nothing if stopPlayback is true
      return;
    }

    if (isFinite(loop) && loop > 1) {
      loop--;

      setTimeout(() => {
        playMorseCode(morseCode, callback);
      }, delay);
    } else if (loop === "infinity") {
      playMorseCode(morseCode, callback);
    }
  };

  playMorseCode(morseCode, callback);

  const stop = () => {
    stopPlayback = true;
  };

  return { stop };
}
