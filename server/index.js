const cors = require('cors');
const express = require('express');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const port = 5000;
app.listen(port, () => console.log(`Server has started on port ${port}`));