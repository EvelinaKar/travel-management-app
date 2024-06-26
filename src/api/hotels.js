export const fetchHotels = async () => {
  const response = await fetch("http://localhost:3000/hotels");
  return await response.json();
};

export const createHotel = async (newHotel) => {
  const response = await fetch("http://localhost:3000/hotels", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newHotel),
  });
  return await response.json();
};

export const deleteHotel = async (hotelId) => {
  const response = await fetch(`http://localhost:3000/hotels/${hotelId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Error deleting hotel");
  }
  return await response.json();
};
