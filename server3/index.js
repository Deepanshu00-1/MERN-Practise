// mongo pw: 54LEILZDENYxRdk9
// mongo conn: mongodb+srv://krrohan129:54LEILZDENYxRdk9@cluster0.wfvfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require("express");
const app = express();
const connectDB = require("./db.js");
const itemModel = require("./models/Item.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());


connectDB();

app.get("/", async (req, res)=>{
    const response = await itemModel.find();
    return res.json({items : response});
})

app.listen(3000, ()=>{console.log("Server is running")});