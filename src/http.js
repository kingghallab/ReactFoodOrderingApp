// export async function fetchSendUserPlaces(userPlaces) {
//   const response = await fetch("http://localhost:3000/user-places", {
//     method: "PUT",
//     body: JSON.stringify({ places: userPlaces }),
// headers: {
//   "Content-Type": "application/json",
// },
//   });

//   const resData = await response.json();
//   if (!response.ok) {
//     throw new Error("failed to update user data");
//   }
//   return resData.message;
// }

export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const mealData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch meal data");
  }
  return mealData;
}

export async function fetchSendOrders(orders) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify(orders),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Cannot Send Order Data");
  }
  return response.message;
}

// send order data
