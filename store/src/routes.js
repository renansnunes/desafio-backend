const productHandler = require('./handlers/product');
const cartHandler = require('./handlers/cart');
const buyHandler = require('./handlers/buy');
module.exports = [
    {
        method: 'GET',
        path: '/store/api/v1/product',
        handler: productHandler.getAll
    },
    {
        method: 'GET',
        path: '/store/api/v1/product/{id}',
        handler: productHandler.getOne
    },
    {
        method: 'POST',
        path: '/store/api/v1/product',
        handler: productHandler.save
    },
    {
        method: 'DELETE',
        path: '/store/api/v1/product/{id}',
        handler: productHandler.remove
    },
    {
        method: 'GET',
        path: '/store/api/v1/cart',
        handler: cartHandler.getAll
    },
    {
        method: 'GET',
        path: '/store/api/v1/cart/{id}',
        handler: cartHandler.getOne
    },
    {
        method: 'POST',
        path: '/store/api/v1/add_to_cart',
        handler: cartHandler.save
    },
    {
        method: 'POST',
        path: '/store/api/v1/buy',
        handler: buyHandler.save
    },
    {
        method: 'GET',
        path: '/store/api/v1/history',
        handler: buyHandler.getAll
    },
    {
        method: 'GET',
        path: '/store/api/v1/history/{client_id}',
        handler: buyHandler.getOneClient
    }
];