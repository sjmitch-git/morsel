const position = {
  coords: {
    latitude: 40.7128,
    longitude: -74.006,
  },
};

export const getCurrentPosition = jest.fn((successCallback, errorCallback, options) => {
  successCallback({ position });
});

export const mockNavigator = {
  userAgent: "node.js",
  language: "en-US",
  geolocation: {
    getCurrentPosition,
  },
  permissions: {
    query: jest.fn(),
  },
};

global.navigator = mockNavigator;
