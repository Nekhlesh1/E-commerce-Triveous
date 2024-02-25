import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.urlencoded({extended: true}))

app.use(express.static("public"))
app.use(cookieParser())

// import router
import productRouter from "./routes/products.route.js"
import userRouter from "./routes/user.route.js"
import categoryRouter from "./routes/category.route.js"
import orderRouter from "./routes/orders.route.js"

app.use("/api/v1/products",productRouter)
app.use("/api/v1/user",userRouter);
app.use("/api/v1/category",categoryRouter)
app.use("/api/v1/order",orderRouter)
export default app