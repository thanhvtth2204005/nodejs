const { application } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT | 1234;


app.listen(port,function(){
    console.log("server is running...");
})

app.get("/",function (reg,res) {
    res.send("Hello");
})

app.get("/bong-da",function (reg,res){
    res.send("Bong da");
})