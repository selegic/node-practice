const SubmitModel = require("../model/Submit");
const Todo=require("../model/Todo");

module.exports.addSubmit = async (req, res) => {
    try {
      const { name, subject,marks } = req.body;
  
      if (name === undefined || name === "" || name === null) {
        throw new Error("name is needed");
      }
if(req.body.todo){
  await Todo.findById(req.body.todo);
}
    
      //insert the data to mongodb.
      const newTodo = await SubmitModel.create({ name, subject,marks,todo:req.body.todo });

      await SubmitModel.populate(newTodo,["todo"]);
  
      return res.status(200).json({
        success: true,
        message: "submit added successfully",
        submit: newTodo,
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