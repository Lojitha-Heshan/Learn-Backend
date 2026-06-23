import express from 'express'
import mongoose from 'mongoose'
import studentRouter from './routers/studentRouter.js'
import authenticate from './middlewares/authenticate.js'
import productRouter from './routers/productRouter.js'
import dotenv from "dotenv"
import cors from "cors"
import orderRouter from './routers/orderRouter.js'

dotenv.config()


const mongoDBURI = process.env.MONGO_URI

mongoose.connect(mongoDBURI).then(   // then mean like promises 
    ()=>{
        console.log("Connected to MongoDB successfully")
    }
)

const app = express()

app.use(express.json())  // need to what the plugin

app.use(authenticate)


app.use("/students" , studentRouter)   // use the router for students
app.use("/users" , userRouter)   // use the router for users
app.use("/products" , productRouter)   // use the router for products   


app.listen(
    3000 ,
    ()=>{
        console.log('Server started successfully')
        console.log('Listening on port 3000')
    }
)

//reruest , respons
/*
app.get(
    "/",
    (req , res)=>{
     
        // retrieve all the student from the database
        Student.find().then(
            
            (results)=>{
                res.json(results)
            }
        )
       
       
    }
)

app.post(
    "/",
    (req , res)=>{

        const newStudent = new Student(req.body)
        newStudent.save().then(
            ()=>{
                res.json({
                    message : "Student added Succesfully"

                }

                )
            }
        )

    }
)

    


app.put(
    "/", 
    (req , res)=>{
         console.log("put request received")

    }
)

app.delete(
    "/",
    (req , res)=>{
         console.log("delete request received")
    }
) 

    



// function success(){
//     console.log('Server started successsfully')
// }

// app.listen(3000 , success)
*/


  