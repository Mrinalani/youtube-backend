// require('dotenv').config({path: './env'})  // work perfectly fine
import dotenv from "dotenv"       // to work with module import
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` server is listning on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("mongoDB connection failed !!", error)
})