import express from "express";
import { getPosts, addPost } from "../controller/post.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/", addPost);

export default router;
