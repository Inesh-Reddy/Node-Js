const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({});

module.exports = mongoose.model(Products, ProductSchema);
