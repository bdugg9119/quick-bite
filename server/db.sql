CREATE DATABASE restaurant_list;

CREATE TYPE category AS ENUM (
  'Chinese',
  'Diner',
  'Eastern Other',
  'Fast Food',
  'French',
  'Greek',
  'Hungarian',
  'Italian',
  'Japanese',
  'Mediterranean'
  'Mexican',
  'Pizza',
  'Pub Grub',
  'Thai'
);

CREATE TABLE restaurants(
  restaurant_id SERIAL PRIMARY KEY,
  restaurant_name VARCHAR(128) NOT NULL,
  restaurant_category category NOT NULL,
  rating SMALLINT CHECK (rating BETWEEN 0 AND 5) DEFAULT 0 NOT NULL,
  last_visit DATE
);
