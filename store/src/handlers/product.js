const ProductModel = require('../models/product');

const resultProduct = product => ({
    product_id: product.product_id,
    artist: product.artist,
    year: product.year,
    album: product.album,
    price: product.price,
    store: product.store,
    thumb: product.thumb,
    date: product.date
});

const getAll = async (request, h) => {
    const products = await ProductModel.find({});

    return products.map(resultProduct);
}

const getOne = async (request) => {
    const product = await ProductModel.findOne({ product_id: request.params.id });
    return resultProduct(product);
}

const save = async (request, h) => {
    const { product_id, artist, year, album, price, store, thumb, date } = request.payload;

    const product = new ProductModel;
    product.product_id = product_id;
    product.artist = artist;
    product.year = year;
    product.album = album;
    product.price = price;
    product.store = store;
    product.thumb = thumb;
    product.date = date;

    await product.save();

    return h.response(resultProduct(product)).code(201);
}

const remove = async (request, h) => {
    await ProductModel.findOneAndDelete({ product_id: request.params.id });

    return h.response().code(204);
}

module.exports = {
    getAll,
    getOne,
    save,
    remove
};