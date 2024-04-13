import * as Location from "expo-location";

export async function getAddress(latitude, longitude) {
  try {
    let addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
    console.log("addressResponse", addressResponse);
    if (addressResponse.length > 0) {
      let address = `${addressResponse[0].name} ${addressResponse[0].street} ${addressResponse[0].postalCode}`;
      console.log("formatAddress", formatAddress(addressResponse[0]));
      return addressResponse[0].formattedAddress || address;
    } else {
      throw new Error("No address found for the provided coordinates");
    }
  } catch (error) {
    throw new Error(`Error fetching address: ${error.message}`);
  }
}

const formatAddress = (addressObject) => {
  return addressObject;
};
