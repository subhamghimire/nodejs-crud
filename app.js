var express = require("express");
var bodyParser = require("body-parser");

var product = require("./routes/product"); // Imports routes for the products
var app = express();

// Set up mongoose connection
var mongoose = require("mongoose");
var mongoUrl = "mongodb://localhost:27017/crud";
mongoose.connect(mongoUrl, { useUnifiedTopology: true });
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("open", () => console.log("Database connected"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is up and running");
});
