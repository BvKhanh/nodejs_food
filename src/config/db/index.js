
const dotenv = require('dotenv')
dotenv.config();
const {MongoClient, ServerApiVersion} = require('mongodb')
const uri = process.env.DB_PASSWORD; // Kiểm tra lại biến này trong file .env, thường nên đặt tên là DB_CONNECTION_STRING

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let db;

async function connectDB() {
  try {
    if (!client) {
      client = new MongoClient(uri, options);
      await client.connect();
      console.log("Đã kết nối đến MongoDB!");
      db = client.db("myDatabase"); // Đổi "myDatabase" thành tên database của bạn
    }
    return db;
  } catch (error) {
    console.error("Lỗi kết nối MongoDB:", error);
    process.exit(1);
  }
}
connectDB()
module.exports = connectDB
helloword