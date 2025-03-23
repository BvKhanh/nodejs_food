const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/paradise_food_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('🟢 Kết nối MongoDB thành công!');
    } catch (error) {
        console.log('🔴 Kết nối MongoDB thất bại:', error);
    }
}

module.exports = { connect };
