const express=require('express');
const app=express();
 const port="8000";
const db=require("./config/mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoController=require("./controller/todo_controller");

app.get("/todo",todoController.getAllTodos);
 app.post("/todo",todoController.addTodo);
 app.put("/todo/:id",todoController.updateTodo);
 app.delete("/todo/:id",todoController.deleteTodo);
 app.get("/todo/:id",todoController.getDataWithId);


 app.listen(port,function(error){
     if(error){
         console.log(error);
     }
     console.log(`server running on ${port}`);
 });