const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const foodRoutes = require("./routes/foodRoutes");
const orderRoutes = require("./routes/orderRoutes");
console.log(require("./routes/orderRoutes"));
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Food Delivery App Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});