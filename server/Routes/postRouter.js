import express from "express";
import { createPost, deleteBlog, getAllBlogs, getEachBlog, getUserBlogs } from "../Controllers/postController.js";
import { isAuthenticated } from "../Middlewares/auth.js";

const postRouter=express.Router();

postRouter.post("/create",isAuthenticated,createPost);

postRouter.post("/each",isAuthenticated,getUserBlogs);

postRouter.post("/all",getAllBlogs);

postRouter.post("/delete",isAuthenticated,deleteBlog);

postRouter.post("/get/each",getEachBlog);

export default postRouter;