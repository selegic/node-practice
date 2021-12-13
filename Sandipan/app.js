const express = require("express");
const https =require("https");
const bodyParser=require("body-parser");
const app=express();




app.use(bodyParser.urlencoded({extended: true}));


app.get('/',function(req,res){
    res.sendFile(__dirname+ "/index.html");
});

app.post('/',function(req,res){
    console.log(req.body.cityName);

    const query=req.body.cityName;
    const apiKey="9a1c24bc57e0a112e9c6de16daf9f833";
    const unit="metric";

    if(typeof query=="number") var url= `https://api.openweathermap.org/data/2.5/weather?zip=${query},in&units=metric&appid=${apiKey}`;
    else if(typeof query=="string") var url= `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
    

    https.get(url,function(response){
        console.log(response.statusCode);
    
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp= weatherData.main.temp;
            const weatherDescription=weatherData.weather[0].description;
            const icon= weatherData.weather[0].icon;
            const imageURL= "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            res.write("<h1>The temperature in " + query +" is " + temp+ "degree Celcius  </h1>");
            res.write("<p>The weather is currently "+ weatherDescription+ "<p>");
            res.write("<img src="+imageURL+">");
            res.send();  
        });
    });
})
app.listen(8003,function(){
    console.log("server started at port 8003");
}); 