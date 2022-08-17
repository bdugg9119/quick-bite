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
    const { restaurant_category, restaurant_name } = req.body;

    const newRestaurant = await pool.query(
      'INSERT INTO restaurants(restaurant_name, restaurant_category) VALUES($1, $2) RETURNING *', 
      [restaurant_name, restaurant_category]
    );

    res.json(newRestaurant.rows[0]);
  
  } catch (error) { console.log(error); }
});

// Get All

// Get Single

// Update

// Delete

const port = 5000;
app.listen(port, () => console.log(`Server has started on port ${port}`));