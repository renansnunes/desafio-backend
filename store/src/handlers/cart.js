const CartModel = require('../models/cart');

const resultCart = cart => ({
    cart_id: cart.cart_id,
    client_id: cart.client_id,
    product_id: cart.product_id,
    date: cart.date,
    time: cart.time
});

const getAll = async (request, h) => {
    const carts = await CartModel.find({});
    return carts.map(resultCart);
}

const getOne = async (request) => {
    const cart = await CartModel.findOne({ cart_id: request.params.id });
    return resultCart(cart);
}

const save = async (request, h) => {
    const { cart_id, client_id, product_id, date, time } = request.payload;

    const cart = new CartModel;
    cart.cart_id = cart_id;
    cart.client_id = client_id;
    cart.product_id = product_id;
    cart.date = date;
    cart.time = time;

    await cart.save();

    return h.response(resultCart(cart)).code(201);
}

module.exports = {
    getAll,
    getOne,
    save
};