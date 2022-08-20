import { Restaurant, RestaurantCategory } from "./types";

export const nullRestaurant: Restaurant = {
  restaurant_id: 0,
  name: '',
  category: RestaurantCategory.DeliDiner,
  rating: undefined,
  last_visit: undefined
};