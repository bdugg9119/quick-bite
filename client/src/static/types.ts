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

export type Rating = 1|2|3|4|5;

export type Restaurant = {
  id: number,
  name: string,
  category: RestaurantCategory,
  rating?: Rating,
  last_visit?: Date
};