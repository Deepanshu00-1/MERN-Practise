import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: String,
    age: Number,
    occupation: String,
    contact: Number
});

const itemModel = mongoose.model("Items", itemSchema);

export default itemModel;
