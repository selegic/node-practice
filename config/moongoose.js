const mongoose=require('mongoose');

const db=mongoose.connection;


mongoose.connect("mongodb://localhost/Todos");

db.on("error" ,console.error.bind(console,"ERROR CONNECTING TO DATABASE!!"));

db.once("open",()=>{
    console.log("connected to database");
})

module.exports=mongoose;