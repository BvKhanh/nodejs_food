const fs = require('fs');

// Hàm chuyển ảnh thành chuỗi Base64
function imageToBase64(imagePath) {
  // Đọc tệp ảnh
  const imageBuffer = fs.readFileSync(imagePath);

  // Chuyển đổi Buffer thành chuỗi Base64
  const imageBase64 = imageBuffer.toString('base64');

  return imageBase64;
}

module.exports = { imageToBase64 };
