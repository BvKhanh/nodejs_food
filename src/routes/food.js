const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
});

const Food = mongoose.model('Food', FoodSchema);

module.exports = Food;
