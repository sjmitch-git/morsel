import { getUserLocation } from "@/utils/userLocation/getUserLocation";
import { mockNavigator } from "@/mocks/mockNavigator";

describe("getUserLocation", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should resolve with user location when GPS is available and permission is granted", async () => {
    mockNavigator.permissions.query.mockResolvedValue({ state: "granted" });
    mockNavigator.geolocation.getCurrentPosition.mockImplementationOnce((successCallback) => {
      const position = {
        coords: { latitude: 40.7128, longitude: -74.006 },
      };
      successCallback(position);
    });

    const result = await getUserLocation();

    expect(result).toEqual({ latitude: 40.7128, longitude: -74.006 });
  });

  it("should reject with an error message when GPS permission is denied", async () => {
    mockNavigator.permissions.query.mockResolvedValue({ state: "denied" });

    await expect(getUserLocation()).rejects.toMatch(
      "GPS is not available or permission is denied."
    );
  });

  it("should reject with an error message when GPS is not available", async () => {
    mockNavigator.permissions.query.mockResolvedValue({ state: "granted" });
    mockNavigator.geolocation.getCurrentPosition.mockImplementationOnce((_, errorCallback) => {
      const error = new Error("Error getting user location");
      errorCallback(error);
    });

    await expect(getUserLocation()).rejects.toMatch("Error getting user location");
  });
});
