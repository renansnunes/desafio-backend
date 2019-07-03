const BuyModel = require('../models/buy');

const resultBuy = buy => ({
    client_id: buy.client_id,
    cart_id: buy.cart_id,
    client_name: buy.client_name,
    value_to_pay: buy.value_to_pay,
    credit_card: {
        number: buy.credit_card.number,
        cvv: buy.credit_card.cvv,
        exp_date: buy.credit_card.exp_date,
        card_holder_name: buy.credit_card.card_holder_name
    }
});

const resultHistory = buy => ({
    client_id: buy.client_id,
    order_id: buy.order_id,
    card_number: blindCreditCard(buy.credit_card.number),
    value: buy.value_to_pay,
    date: buy.order_date
});

let dateNow = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return `${day}/${month}/${year}`;
};

let blindCreditCard = (n) => {
    const regex = /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/gm;
    const subst = `**** **** **** `
    return n.toString().replace(regex, subst);
};

const getAll = async (request, h) => {
    const buys = await BuyModel.find({});
    return buys.map(resultHistory);
}

const getOneClient = async (request) => {
    const buy = await BuyModel.find({ client_id: request.params.client_id });
    return buy.map(resultHistory);
}

const save = async (request, h) => {
    const { client_id, cart_id, client_name, value_to_pay, credit_card: {number, cvv, exp_date, card_holder_name} } = request.payload;

    const buy = new BuyModel;
    buy.client_id = client_id;
    buy.cart_id = cart_id;
    buy.order_id = buy._id;
    buy.client_name = client_name;
    buy.value_to_pay = value_to_pay;
    buy.credit_card.number = number;
    buy.credit_card.cvv = cvv;
    buy.credit_card.exp_date = exp_date;
    buy.credit_card.card_holder_name = card_holder_name;
    buy.order_date = dateNow();

    await buy.save();

    return h.response(resultBuy(buy)).code(201);
}

module.exports = {
    getAll,
    getOneClient,
    save
};