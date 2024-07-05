const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/porduct.model.js");
const productRoutes = require("./routes/product.route.js");
const app = express();

//  Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from node API Server updated");
});

mongoose
  .connect(
    "mongodb+srv://kamblesanghpal2003:SwM97AOfLlB0kfEG@backenddb.syxa1yg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected to the database");
    app.listen(3001, () => {
      console.log("server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
