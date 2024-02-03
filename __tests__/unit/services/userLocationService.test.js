import { mockNavigator } from "@/mocks/mockNavigator";
import { getUserLocation } from "@/services/userLocation.service";

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
