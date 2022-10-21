const express= require("express");
const cors=require("cors");
require("./config/db");

const router= require("./routes/users.route")

const app= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/views/index.html");
})

app.use("/api/users",router);

//Route not found error handling
app.use((req,res,next)=>{
    res.status(404).json({
        Message:"Route not Found !!!",
    })
})

//Server error handling
app.use((err,req,res,next)=>{
    res.status(500).json({
        Message:" Something broke !!!",
    })
})


module.exports=app;