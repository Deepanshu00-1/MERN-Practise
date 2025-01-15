const mongoose = require("mongoose");

const connectDB = async()=>{
    const conn = await mongoose.connect("mongodb+srv://krrohan129:54LEILZDENYxRdk9@cluster0.wfvfr.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connected ", conn.connection.host);
}
module.exports = connectDB;