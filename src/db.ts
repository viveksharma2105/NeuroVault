import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type:String, require:true},
    name: String
})

const userSchema = new Schema({
    email:{type:String, require:true},
    name: String
})

const userSchema = new Schema({
    email:{type:String, require:true},
    name: String
})

const userSchema = new Schema({
    email:{type:String, require:true},
    name: String
})

const userSchema = new Schema({
    email:{type:String, require:true},
    name: String
})


const userModel = mongoose.model("user", userSchema);

module.exports = {
    userModel,
    
}