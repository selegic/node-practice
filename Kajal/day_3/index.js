const express = require("express");
const app = express();
const port = "8000";

//use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//include the controller
const TodoController = require("./controller/todo_controller");

app.get("/todos", TodoController.getAllTodos);
app.post("/todos", TodoController.addTodo);

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  }
  console.log(`Server Running on Port: ${port}`);
});
