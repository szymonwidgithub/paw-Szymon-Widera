const mongoose = require("mongoose");

const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: String,
        description: String,
        price: Number,
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }

    })
);

module.exports = Product;