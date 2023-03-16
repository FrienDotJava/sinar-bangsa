const express = require("express");
// const AOS = require("aos");
// require("aos/dist/aos.css");

const app = express();
app.use(express.static("public"));

// AOS.init();

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.get("/paud", (req,res)=>{
    res.sendFile(__dirname+"/paud.html")
});

app.get("/sd", (req,res)=>{
    // res.sendFile(__dirname+"/sd.html")
    res.sendFile(__dirname+"/sd.html")
});

app.listen(process.env.PORT||3000, ()=>{
    console.log("Server running...");
});