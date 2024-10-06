// lib/map.js

export const getCoordinatesFromAddress = async (address) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      address
    )}`
  );
  const data = await response.json();

  if (data.length > 0) {
    const { lat, lon } = data[0];
    return { lat, lon };
  } else {
    throw new Error("Koordinatlar bulunamadı.");
  }
};
