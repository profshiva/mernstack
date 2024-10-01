import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT =4000;

const app =express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello World");
})
await mongoose.connect("mongodb+srv://silai:aadhee@bitfumes-mern.7i5ge.mongodb.net/?retryWrites=true&w=majority&appName=bitfumes-mern")
console.log("MongoDB connection is successful");



app.listen(PORT,()=>{
    console.log("Server is running in http://localhost:4000")
})