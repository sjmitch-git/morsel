import { checkGPSAvailability } from "./checkGPSAvailability";

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
          console.log("GPS is not available.");
          reject("GPS is not available.");
        }
      })
      .catch(() => {
        reject("Error checking GPS availability.");
      });
  });
}
