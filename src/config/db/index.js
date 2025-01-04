const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/paradise_food_dev');
        console.log('Ket noi thanh cong MongoDB');
    } catch (error) {
        console.log('Ket noi that bai MongoDB', error);
    }
}

module.exports = { connect };
