const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    cart_id: String,
    client_id: String,
    product_id: String,
    date: String,
    time: String
});

module.exports = mongoose.model('Cart', CartSchema);