import { mockNavigator } from "@/mocks/mockNavigator";
import { checkGPSAvailability, getUserLocation } from "@/services/userLocation.service";

describe("checkGPSAvailability", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    Object.defineProperty(global, "navigator", { value: mockNavigator });
  });
  it("should resolve with available: true and permission: true when geolocation is granted and is supported", async () => {
    mockNavigator.permissions.query.mockResolvedValue({ state: "granted" });

    const result = await checkGPSAvailability();

    expect(result).toEqual({ available: true, permission: true });
  });
});

describe("getUserLocation", () => {
  it("should resolve with user location when GPS is available and permission is granted", async () => {
    const mockQuery = jest.fn().mockResolvedValue({ state: "granted" });
    const mockGetCurrentPosition = jest.fn().mockImplementation((successCallback) => {
      const position = { coords: { latitude: 40.7128, longitude: -74.006 } };
      successCallback(position);
    });

    global.navigator = {
      permissions: { query: mockQuery },
      geolocation: { getCurrentPosition: mockGetCurrentPosition },
    };

    const result = await getUserLocation();

    expect(result).toEqual({ latitude: 40.7128, longitude: -74.006 });
  });
});
