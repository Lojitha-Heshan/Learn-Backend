import express from "express"
import mongoose from "mongoose"
import studentRouter from "./routers/studentRouter.js"
import userRouter from "./routers/userRouter.js"
import authenticate from "./middlewares/authenticate.js"

const productRouter = express.Router()

productRouter.post("/", createProduct)
productRouter.get("/", getAllProducts)
export default productRouter



