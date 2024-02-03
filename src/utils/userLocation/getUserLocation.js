import * as Location from "expo-location";

export async function getUserLocation() {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      throw new Error("Location permission not granted");
    }

    const location = await Location.getCurrentPositionAsync({});
    return { latitude: location.coords.latitude, longitude: location.coords.longitude };
  } catch (error) {
    throw new Error(`Error getting user location: ${error.message}`);
  }
}
