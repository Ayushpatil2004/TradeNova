const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    quantity: Number,
    price: String,
    mode: String,
});

module.exports = {OrdersSchema};