// mongo pw: L3gh0qGLFh9kgwIs
// mongo conn: mongodb+srv://krrohan129:L3gh0qGLFh9kgwIs@cluster0.l4kkt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import express from "express";
import cors from "cors";
import connectDB from "./db.js";
import itemModel from "./models/Item.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", async (req,res)=>{
    const response = await itemModel.find();
    return res.json({items: response});
})

app.listen(3000, ()=> console.log("Server is running"));
