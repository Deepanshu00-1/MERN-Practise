// mongo pw: Z8AwAW74s8JZ5lLT
// conn string: mongodb+srv://krrohan129:Z8AwAW74s8JZ5lLT@cluster0.ozxcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express = require("express");
const app = express();
const connectDB = require("./db.js");
const itemModel = require("./models/Item.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", async (req,res)=>{
    const response = await itemModel.find();
    return res.json({items : response});
})

app.listen(3000, ()=>{
    console.log("app is running");
});

// cors: cross origin resource sharing(used to create APIs).
