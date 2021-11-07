var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    countInStock: {
        type: Number,
    },
    color: {
        type: String,
    },
    size: {
        type: Number,
    }
});


module.exports  = mongoose.model('Product', productSchema );

