const {model} = require("mongoose");

const {PositionsSchema} = require("../Schema/PositionsSchema");

const PositionsModel = new model("Position",PositionsSchema);

module.exports = {PositionsModel};