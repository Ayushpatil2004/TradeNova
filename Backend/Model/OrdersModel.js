const {model} = require("mongoose");

const {OrdersSchema} = require("../Schema/OrdersSchema");

const OrdersModel = new model("Order", OrdersSchema);

module.exports = {OrdersModel};