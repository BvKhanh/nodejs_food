const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Food = new Schema({
    name: { type: String },
    desciption: { type: String },
    image: { type: String },
    // ceatedAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Food', Food);
