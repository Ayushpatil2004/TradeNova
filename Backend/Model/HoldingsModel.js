const {model} = require("mongoose");

const {HoldingsSchema} = require("../Schema/HoldingsSchema");

const HoldingsModel = new model("Holding",HoldingsSchema);

module.exports = {HoldingsModel};