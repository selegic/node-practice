const express= require("express");
const app= express();
const path= require("path");
const port="8000"


app.get("/",(req,res)=>{
return res.sendFile(path.resolve("./world.html"));
});

app.get("/area", function (req, res) {
    if (req.query.x && req.query.y) {
        result = parseInt(req.query.x) * parseInt(req.query.y);
      }
      return res.status(200).send(`Area=${result}`);
  });

app.listen(port,()=>{
 console.log(`server running in this port ${port}`);
})