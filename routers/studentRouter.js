import express from 'express'
import mongoose from 'mongoose'
import studentRouter from './routers/studentRouter.js'
import userRouter from './routers/userRouter.js'
import authenticate from './middlewares/authenticate.js'

const mongoDBURI = "mongodb+srv://admin:1234@cluster0.pwakeym.mongodb.net/dev?appName=Cluster0"

mongoose.connect(mongoDBURI).then(
    ()=>{
        console.log("Connected to MongoDB successfully")
    }
)

const app = express()

app.use( express.json() )

app.use(authenticate)

app.use("/students",studentRouter)
app.use("/users" , userRouter)

app.listen(
    3000 ,
    ()=>{
        console.log('Server started successfully')
        console.log('Listening on port 3000')
    }
)
