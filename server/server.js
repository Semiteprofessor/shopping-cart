require('dotenv').config();
const express = require('express');
const app = express()
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDB();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on localhost:${PORT}`))

