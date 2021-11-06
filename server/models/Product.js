var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    countInStock: {
        type: Number
    },
    imageUrl: {
        type: String,
    }
});


module.exports  = mongoose.model('Product', productSchema );

