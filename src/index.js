require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const ProductRouter = require("../src/routes/ProductRouter")
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/cart', ProductRouter)
app.use('/uploads', express.static('uploads'));

connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
