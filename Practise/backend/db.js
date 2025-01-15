import mongoose from "mongoose";

const connectDB = async ()=>{
    const conn = await mongoose.connect("mongodb+srv://krrohan129:L3gh0qGLFh9kgwIs@cluster0.l4kkt.mongodb.net/itemdb?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDb Connected ", conn.connection.host);
}
export default connectDB;