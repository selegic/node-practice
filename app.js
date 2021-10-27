const express = require("express");

const app = express();
const port = "8000";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./config/moongoose");
const TodoController = require("./controller/todo_controller");

app.get("/todos", TodoController.getAllTodo);
app.post("/todos", TodoController.addTodo);
app.delete("/todos/:id", TodoController.deleteTodo);
app.get("/todos/:id", TodoController.getTodoById);

app.listen(port, function (error) {
  if (error) {
    console.log(error);
  }
  console.log(`server running on ${port}`);
});
