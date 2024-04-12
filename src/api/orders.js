export const fetchOrders = async () => {
  const response = await fetch("http://localhost:3000/orders");
  return await response.json();
};

export const createOrder = async (newOrder) => {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newOrder),
  });
  return await response.json();
};

export const deleteOrder = async (orderId) => {
  const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Error deleting order");
  }
  return await response.json();
};

export const fetchOrderById = async (orderId) => {
  const response = await fetch(`http://localhost:3000/orders/${orderId}`);
  if (!response.ok) throw new Error("Failed to fetch order");
  return response.json();
};

export const updateOrder = async (orderId, updatedOrder) => {
  const response = await fetch(`http://localhost:3000/orders/${orderId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedOrder),
  });
  if (!response.ok) throw new Error("Failed to update order");
  return response.json();
};
