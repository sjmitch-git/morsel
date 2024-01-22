import { checkGPSAvailability } from "./checkGPSAvailability";

export function getUserLocation() {
  return new Promise((resolve, reject) => {
    checkGPSAvailability()
      .then((result) => {
        if (result.available && result.permission) {
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
          reject("GPS is not available or permission is denied.");
        }
      })
      .catch(() => {
        reject("Error checking GPS availability.");
      });
  });
}
