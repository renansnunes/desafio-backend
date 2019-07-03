const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_id: {
        type: String,
        unique: true
    },
    artist: String,
    year: Number,
    album: String,
    price: Number,
    store: String,
    thumb: String,
    date: String
});

module.exports = mongoose.model('Product', ProductSchema);