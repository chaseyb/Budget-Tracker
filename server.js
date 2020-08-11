// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// Express 
const app = express();
app.use(compression());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// Logger 
app.use(logger("dev"));

// Mongoose Connection to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password2020@ds041357.mlab.com:41357/heroku_mv53g3jb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

// Server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});