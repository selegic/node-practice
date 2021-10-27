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

module.exports.updateTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;

    const data = await TodoModel.findByIdAndUpdate(
      { _id: req.params.id },
      { title, completed },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Todo Updated successfully",
      updatedTodo: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
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

module.exports.getTodoWithId = async (req, res) => {
  try {
    const data = await TodoModel.findById({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      message: `Todo with id ${req.params.id}`,
      todo: data,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error!",
      error: err.message,
    });
  }
};
