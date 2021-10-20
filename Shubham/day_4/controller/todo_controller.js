const TodoModel = require("../model/Todo");

module.exports.getAllTodos = async (req, res) => {
  try {
    //seacrch the db and fetch all the todo
    const todos = await TodoModel.find({});

    // console.log(todos);

    return res.status(200).json({
      success: true,
      message: "List of all Todos.",
      todos: todos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error!",
      error: error.message,
    });
  }
};

module.exports.addTodo = async (req, res) => {
  const { title, completed } = req.body;

  if (title === undefined || title === "" || title === null) {
    return res.status(400).json({
      success: false,
      message: "Bad Request, title must be specified",
    });
  }

  //insert the data to mongodb.
  const newTodo = await TodoModel.create({ title, completed });

  return res.status(200).json({
    success: true,
    message: "Todos added successfully",
    todo: newTodo,
  });
};
