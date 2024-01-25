import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./data/db.js";
import userRouter from "./Routes/userRouter.js";
import postRouter from "./Routes/postRouter.js";

const app=express();
const port=process.env.PORT || 3001;

app.use(cors({
    origin:["http://localhost:5173","https://blogii.netlify.app"],
    credentials: true,
}));

app.use(cookieParser());

connectDb();

app.use(express.json());
app.use("/api/v1/user",userRouter);
app.use("/api/v1/post",postRouter);

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})