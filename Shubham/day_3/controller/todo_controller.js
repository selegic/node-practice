module.exports.getAllTodos = async (req, res) => {
  const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
  ];

  res.status(200).json({
    success: true,
    message: "List of all Todos.",
    todos: todos,
  });
};

module.exports.addTodo = async (req, res) => {
  const { id, title, completed } = req.body;

  if (id === undefined || title === undefined || completed === undefined) {
    return res.status(400).json({
      success: false,
      message: "Bad Request",
    });
  }

  //insert the data to mongodb.

  return res.status(200).json({
    success: true,
    message: "Todos added successfully",
    todo: {
      id,
      title,
      completed,
    },
  });
};
