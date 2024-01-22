import "@testing-library/jest-dom";
import { mockNavigator } from "@/mocks/mockNavigator";
import { checkGPSAvailability } from "@/utils/userLocation/checkGPSAvailability";

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

  it("should resolve with available: false and permission: false when geolocation is not supported", async () => {
    delete global.navigator;

    const result = await checkGPSAvailability();

    expect(result).toEqual({ available: false, permission: false });

    global.navigator = mockNavigator;
  });

  it("should resolve with available: true and permission: false when geolocation permission is denied or prompted", async () => {
    mockNavigator.permissions.query.mockResolvedValue({ state: "prompt" });

    const result = await checkGPSAvailability();

    expect(result).toEqual({ available: true, permission: false });
  });

  it("should resolve with available: false and permission: false when geolocation is not supported", async () => {
    delete global.navigator;

    const result = await checkGPSAvailability();

    expect(result).toEqual({ available: false, permission: false });
  });

  it("should resolve with available: false and permission: false when there is an error querying geolocation permission", async () => {
    mockNavigator.permissions.query.mockRejectedValue(new Error("Query error"));

    const result = await checkGPSAvailability();

    expect(result).toEqual({ available: false, permission: false });
  });
});
