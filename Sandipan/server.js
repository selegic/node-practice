const express= require("express");
const app=express();


app.get("/",function(req, res){
  res.send("<h1>hello dear</h1>");
});


app.get("/contact",function(req, res){
    res.send("contact me at linkedin");
  });

  app.get("/hobbies",function(req, res){
    res.send("coding and coding");
  });



app.listen(3001,function(){
    console.log("server started at port 3001");
});
