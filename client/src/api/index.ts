import { Restaurant } from '../static/types';

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await fetch('http://localhost:5000/restaurants');
    const json = await response.json();
    console.log(json);
    return json;
  } catch (err: any) {
    console.error(err.message);
    return err;
  }
};