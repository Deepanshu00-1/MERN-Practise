const mongoose = require("mongoose");

const connectDB = async()=>{
    const conn = await mongoose.connect("mongodb+srv://krrohan129:Z8AwAW74s8JZ5lLT@cluster0.ozxcg.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected", conn.connection.host);
}

module.exports = connectDB;