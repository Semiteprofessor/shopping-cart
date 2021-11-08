require('dotenv').config();
const express = require('express');
const app = express()
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
  
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

