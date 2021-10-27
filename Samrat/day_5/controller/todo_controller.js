const TodoModel = require("../model/Todo");

module.exports.addTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;

    if (title === undefined || title === "" || title === null) {
      return res.status(400).json({
        success: false,
        message: "Bad Request, title must be specified",
      });
    }
    const newTodo = await TodoModel.create({
      title,
      completed,
    });
    // console.log(newTodo);
    return res.status(200).json({
      success: true,
      msg: "todo added successfully",
      todo: newTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "error",
      error: error.message,
    });
  }
};

module.exports.getAllTodos = async (req, res) => {
  try {
    //seacrch the db and fetch all the todo
    const todos = await TodoModel.find({});

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
      message: "todo updated",
      todo: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "there is an error",
      error: error.message,
    });
  }
};


module.exports.getDataWithId = async (req,res)=>{
    try{
        const data=await TodoModel.findById(
            {_id:req.params.id}
        );
        return res.status(200).json({
            success:true,
            message:"todo get",
            result:data,
        });
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"error occured!!",
            error:err.message,
        });
    }
}
module.exports.deleteTodo = async (req, res) => {
  try {
    const data = await TodoModel.findByIdAndDelete({ _id: req.params.id });

    return res.status(200).json({
      success: true,
      message: "operation successfull",
      delete: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "there is error!!",
      error: error.message,
    });
  }
};
