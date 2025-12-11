const {model} = require("mongoose");
const {HoldingsSchema} = require("../schemas/HoldingSchema");


const HoldingsModel = new model("holding", HoldingsSchema); //Name of the collection => 1st param(Holding)+s

module.exports = {HoldingsModel};