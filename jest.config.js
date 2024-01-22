module.exports = {
  preset: "jest-expo",
  testEnvironment: "node",
  testEnvironmentOptions: {
    url: "http://localhost/",
  },
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  moduleNameMapper: {
    "^@/mocks/(.*)$": "<rootDir>/__mocks__/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
