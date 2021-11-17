const express = require("express");
const app = express();
const port = "8000";
const db = require("./config/mongoose");

//use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//include the controller
const TodoController = require("./controller/todo_controller");
const SubmitController=require("./controller/submit_controller");

app.post("/todos", TodoController.addTodo);
app.post("/submit", SubmitController.addSubmit);

app.listen(port, function (error) {
    if (error) {
      console.log(error);
    }
    console.log(`Server Running on Port: ${port}`);
  });
  