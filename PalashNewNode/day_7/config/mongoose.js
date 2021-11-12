const mongoose = require("mongoose");

const db = mongoose.connection;

//connect to the db
mongoose.connect("mongodb://localhost/Todos");

//for error
db.on("error", console.error.bind(console, "ERROR CONNECTING TO DATABASE!!"));

//on success
db.once("open", () => {
  console.log("Conncted to database");
});

module.exports = db;
