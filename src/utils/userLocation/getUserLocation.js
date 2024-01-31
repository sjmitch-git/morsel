/* import { checkGPSAvailability } from "./checkGPSAvailability";

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    checkGPSAvailability()
      .then((result) => {
        if (result.available) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            (error) => {
              reject(`Error getting user location: ${error.message}`);
            }
          );
        } else {
          reject("GPS is not available.");
        }
      })
      .catch(() => {
        reject("Error checking GPS availability.");
      });
  });
}
 */

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
