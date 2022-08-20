import { Restaurant, RestaurantCategory } from "./types";

export const nullRestaurant: Restaurant = {
  restaurant_id: 0,
  name: "Milliway's",
  category: RestaurantCategory.DeliDiner,
  rating: undefined,
  last_visit: undefined
};