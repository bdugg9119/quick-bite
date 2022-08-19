export type Rating = 1|2|3|4|5;

export enum RestaurantCategory {
  Chinese = 'Chinese',
  DeliDiner = 'Deli & Diner',
  Eastern = 'Eastern Other',
  FastFood = 'Fast Food',
  French = 'French',
  Greek = 'Greek',
  Hungarian = 'Hungarian',
  Indian = 'Indian',
  Italian = 'Italian',
  Japanese = 'Japanese',
  Mediterranean = 'Mediterranean',
  Mexican = 'Mexican',
  Pizza = 'Pizza',
  PubGrub = 'Pub Grub',
  Thai = 'Thai'
};

export type Restaurant = {
  category: RestaurantCategory,
  restaurant_id: number,
  last_visit?: Date,
  name: string,
  rating?: Rating
};