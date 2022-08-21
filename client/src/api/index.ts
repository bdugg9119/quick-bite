import { Restaurant } from '../static/types';

export const createRestaurant = async (newRestaurant: Restaurant): Promise<Restaurant> => {
  try {
    return await (await fetch('http://localhost:5000/restaurants', {
      method: 'POST',
      body: JSON.stringify(newRestaurant)
    })).json();
  } catch (err: any) {
    console.error(err.message);
    return err;
  }
}

export const deleteRestaurant = async (id: number) => {
  try {
    return await fetch(`http://localhost:5000/restaurants/${id}`, { method: 'DELETE' });
  } catch (err: any) {
    console.log(err.message);
    return err;
  }
};

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
  try {
    return await (await fetch('http://localhost:5000/restaurants')).json();
  } catch (err: any) {
    console.error(err.message);
    return err;
  }
};