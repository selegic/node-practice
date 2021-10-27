const express = require("express");
const app = express();
const port = "8000";
const db = require("./config/mongoose");

//use json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//include the controller
const TodoController = require("./controller/todo_controller");

app.get("/todos", TodoController.getAllTodos);
app.get("/todos/:id", TodoController.getTodoWithId);
app.post("/todos", TodoController.addTodo);
app.put("/todos/:id", TodoController.updateTodo);
app.delete("/todos/:id", TodoController.deleteTodo);

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  }
  console.log(`Server Running on Port: ${port}`);
});
