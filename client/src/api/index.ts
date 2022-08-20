import { Restaurant } from '../static/types';

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  try {
    return await (await fetch('http://localhost:5000/restaurants')).json();
  } catch (err: any) {
    console.error(err.message);
    return err;
  }
};