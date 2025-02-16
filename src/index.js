import dotenv from 'dotenv'
import connectDB from "./db/index.js"
import { app } from './app.js'
dotenv.config({path: './.env'})




connectDB()
.then(() => {

    app.on("Error",(error) => {
        console.log("Error:",error)
        throw error
    })


    app.listen(process.env.PORT || 8000,() => {
        console.log(`server is running at PORT : ${process.env.PORT}`);
    })
})
.catch((error)  =>{
    console.log('MONGODB connection failed !!', error);
})





























// First approch for connecting database
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express()
// (async () => {
//     try{

//      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//      app.on("Error",(error) => {
//         console.error("error connecting to express", error);
//         throw error
//      })

//      app.listen(process.env.PORT,() => {
//         console.log(`App working on http://localhost:${process.env.PORT}`)
//      })
    
//     }

//     catch (error){
//         console.error("Db Connection faild", error)
//         throw error
//     }
// })()