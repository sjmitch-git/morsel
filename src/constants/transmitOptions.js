export const loopOptions = [
  { label: "None", value: 1 },
  { label: "3", value: 3 },
  { label: "6", value: 6 },
  { label: "12", value: 12 },
  { label: "Infinity", value: -1 },
];

export const delayOptions = [
  { label: "10 secs", value: 10000 },
  { label: "30 secs", value: 30000 },
  { label: "1 min", value: 60000 },
  { label: "2 mins", value: 120000 },
  { label: "3 mins", value: 180000 },
  { label: "5 mins", value: 300000 },
];

export const transmitOptions = [
  { label: "Audio", value: 0 },
  { label: "Flash", value: 1 },
];

const durationModifier = 1;
const dotDuration = 261;
const dashDuration = 470;
const gapDuration = dotDuration * durationModifier;
const letterGapDuration = dashDuration * durationModifier;
const wordGapDuration = gapDuration * 7;

const durationFlashModifier = 2;
const flashDotDuration = dotDuration * durationFlashModifier;
const flashDashDuration = dashDuration * durationFlashModifier;
const flashGapDuration = gapDuration * durationFlashModifier;
const flashLetterGapDuration = letterGapDuration * durationFlashModifier;
const flashWordGapDuration = flashGapDuration * 7;

export {
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
};
