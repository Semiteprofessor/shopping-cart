require('dotenv').config();

const productsData = require('./data/product');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany({productsData})

        console.log('Data import SUCCESS');

        process.exit();
    } catch (error) {
        console.log('Data import FAIL', error);
        process.exit(1);
    }
}

importData();