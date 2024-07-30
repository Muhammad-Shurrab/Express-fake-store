const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const cors = require("cors");

// لاستخدام الكورس
app.use(cors());

// لجلب المنتجات
app.get("/products", async (req, res) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  //   اخبار النوع الرسبونس بأنه جيسون
  res.json(response.data);
});

app.listen(port, () => {
  // لتحويل رابط التيرمنل الى قابل لضغط
  console.log(`UR server i good http://localhost:${port}`);
});
