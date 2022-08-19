const cors = require('cors');
const express = require('express');
const app = express();
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Routes //

// Create
app.post('/restaurants', async (req, res) => {
  try {
    const { category, name, rating, last_visit } = req.body;

    const newRestaurant = await pool.query(
      'INSERT INTO restaurants(name, category, rating, last_visit) VALUES($1, $2, $3, $4) RETURNING *', 
      [name, category, rating, last_visit]
    );

    res.json(newRestaurant.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get All
app.get('/restaurants', async (_, res) => {
  try {
    const restaurants = await pool.query('SELECT * FROM restaurants');

    res.json(restaurants.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// Get Single
app.get('/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const restaurant = await pool.query(
      'SELECT * FROM restaurants WHERE restaurant_id = $1',
      [id]
    );

    res.json(restaurant.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

// Update
app.put('/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, rating, last_visit } = req.body;

    await pool.query(
      `UPDATE restaurants
        SET name = $1,
            category = $2,
            rating = $3,
            last_visit = $4
        WHERE restaurant_id = $5`,
      [name, category, rating, last_visit, id]);
    
    res.json('Restaurant Updated');
  } catch (err) {
    console.error(err.message);
  }
})

// Delete
app.delete('/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM restaurants WHERE restaurant_id = $1', [id]);
    res.json('Restaurant deleted.');
  } catch (err) {
    console.error(err.message);
  }
})

const port = 5000;
app.listen(port, () => console.log(`Server has started on port ${port}`));
