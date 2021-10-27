const TodoModel = require("../model/Todo");
module.exports.getAllTodo = async (req, res) => {
  const todos = await TodoModel.find({});
  try {
    return res.status(200).json({
      success: true,
      message: "Lis of all todos",
      todos: todos,
    });
  } catch {
    return res.status(400).json({
      success: false,
      message: "bad request",
    });
  }
};

module.exports.addTodo = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error!",
      error: error.message,
    });
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete({
      _id: req.params.id,
    });

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully!",
      deletedTodo: deletedTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "there is error!!",
      error: error.message,
    });
  }
};

module.exports.getTodoById = async (req, res) => {
  try {
    const getTodo = await TodoModel.findById({
      _id: req.params.id,
    });

    return res.status(200).json({
      success: true,
      message: "Todo fetched successfully!",
      getTodo: getTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "there is error!!",
      error: error.message,
    });
  }
};
