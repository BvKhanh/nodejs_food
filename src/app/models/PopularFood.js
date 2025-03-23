const mongoose = require('mongoose');

const PopularFoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    popularity: { type: Number, required: true },
    image: { type: String, required: true },
    status: { type: String, required: true },
});

const PopularFood = mongoose.model('PopularFood', PopularFoodSchema);
module.exports = PopularFood;
