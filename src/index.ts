import express from "express";
import z from "zod"
import jwt from "jsonwebtoken"
import { UserModel } from "./db.js";

const app = express();
app.use(express.json());


app.post("/api/v1/signup", async (req, res) => {
    //zod validation and hash the  password
    const username =req.body.username;
    const password = req.body.password;

    try{await UserModel.create({
        username: username,
        password: password
    })
    res.json({
        message: "User signed  up"
    })
    }catch(e){
        res.status(411).json({
            message: "User already exists"
        })
    }

})

app.post("/api/v1/signin", (req, res) => {
const username = req.body.username;
const password =  req.body.password;

})


app.post("/api/v1/content", (req, res) => {
    
})

app.get("/api/v1/content", (req, res) => {
    
})

app.delete("/api/v1/content", (req, res) => {
    
})

app.post("/api/v1/neuro/share", (req, res) =>{

})

app.get("/api/v1/neuro/:shareLink", (req, res) =>{
    
})


app.listen(3000);