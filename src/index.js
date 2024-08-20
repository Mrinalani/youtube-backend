// require('dotenv').config({path: './env'})  // work perfectly fine
import dotenv from "dotenv"       // to work with module import
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})



connectDB()