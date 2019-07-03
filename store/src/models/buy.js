const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuySchema = new Schema({
    client_id: String,
    cart_id: String,
    order_id: String,
    client_name: String,
    value_to_pay: Number,
    credit_card: {
        number: Number,
        cvv: Number,
        exp_date: String,
        card_holder_name: String
    },
    order_date: String
});

module.exports = mongoose.model('Buy', BuySchema);