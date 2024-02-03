import AsyncStorage from "@react-native-async-storage/async-storage";

const storeUserLocation = async (lat, lon) => {
  console.log(lat, lon);
  const coords = {
    lat: lat,
    lon: lon,
  };
  try {
    await AsyncStorage.setItem("user_location", JSON.stringify(coords));
  } catch (error) {
    console.error("Error storing user location:", error);
  }
};

const getStoredUserLocation = async () => {
  try {
    const storedLocation = await AsyncStorage.getItem("user_location");
    return storedLocation ? JSON.parse(storedLocation) : null;
  } catch (error) {
    console.error("Error retrieving user location:", error);
    return null;
  }
};

export { storeUserLocation, getStoredUserLocation };
