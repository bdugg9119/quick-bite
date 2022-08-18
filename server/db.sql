CREATE DATABASE restaurant_list;

CREATE TYPE CATEGORY AS ENUM (
  'Chinese',
  'Deli & Diner',
  'Eastern Other',
  'Fast Food',
  'French',
  'Greek',
  'Hungarian',
  'Indian',
  'Italian',
  'Japanese',
  'Mediterranean',
  'Mexican',
  'Pizza',
  'Pub Grub',
  'Thai'
);

CREATE TABLE restaurants(
  restaurant_id SERIAL PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  category CATEGORY NOT NULL,
  rating SMALLINT CHECK (rating BETWEEN 1 AND 5),
  last_visit DATE
);
