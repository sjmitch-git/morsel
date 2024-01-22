export function checkGPSAvailability() {
  return new Promise((resolve) => {
    if (typeof navigator !== "undefined" && "geolocation" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((result) => {
          if (result.state === "granted") {
            resolve({ available: true, permission: true });
          } else if (result.state === "prompt") {
            resolve({ available: true, permission: false });
          } else if (result.state === "denied") {
            resolve({ available: true, permission: false });
          } else {
            resolve({ available: false, permission: false });
          }
        })
        .catch(() => {
          resolve({ available: false, permission: false });
        });
    } else {
      resolve({ available: false, permission: false });
    }
  });
}
